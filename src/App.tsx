import {
  useEffect,
  useMemo,
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
import { SignupForm } from './components/SignupForm';
import { SocialProof } from './components/SocialProof';
import { useCopyVariation } from './hooks/useCopyVariation';
import { useSignupForm } from './hooks/useSignupForm';
import { cn } from './utils';

const delayed = (
  delay: number
): {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
} => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay,
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
  const {
    phoneNumber,
    email,
    parentName,
    studentName,
    studentGrade,
    isLoading,
    handlePhoneChange,
    setEmail,
    setParentName,
    setStudentName,
    setStudentGrade,
    speed,
    handleSubmit,
  } = useSignupForm();
  const { headline, subheadline, cta } = useCopyVariation();
  const [scrollY, setScrollY] = useState(0);

  // Memoize scroll button animation props
  const scrollButtonProps = useMemo(
    () => ({
      initial: { opacity: 0, y: 10 },
      animate: {
        opacity: scrollY === 0 ? 1 : 0,
        y: scrollY === 0 ? 0 : 10,
      },
      transition: { duration: 0.3 },
    }),
    [scrollY]
  );

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Gradient container. */}
      <section className="w-screen h-screen md:p-6 text-white">
        <div className="w-full h-full md:rounded-lg overflow-hidden relative flex flex-col justify-center items-center gap-4">
          <motion.h1
            {...delayed(0)}
            className="text-6xl md:text-7xl font-bold z-10 text-center"
          >
            {headline}
          </motion.h1>
          <motion.h3
            {...delayed(0.1)}
            className="text-3xl md:text-4xl max-w-xl z-10"
          >
            {subheadline}
          </motion.h3>

          <motion.div
            className="flex flex-col gap-2 items-center z-10 mt-8"
            {...delayed(0.2)}
          >
            <Button
              shadow="neu"
              bg="transparent"
              className="gap-2"
              onClick={() => {
                document.getElementById("cta-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Free 2 week trial
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
            <small className="text-white">No credit card required</small>
          </motion.div>

          <BackgroundGradient speed={speed} />
          <div
            className={cn(
              "absolute inset-0 rounded-lg pointer-events-none z-10",
              "shadow-[inset_2px_2px_8px_#00000044,_inset_-2px_-2px_8px_#ffffffbb] dark:shadow-none"
            )}
          />
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof className="mt-12" />

      {/* Seamless Coordination Section */}
      <section className="w-full bg-white border-y border-gray-100 md:h-screen min-h-[500px] p-4 py-8 md:p-16">
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
          <motion.div className="flex-1 h-full flex justify-center relative rounded-lg overflow-hidden py-12">
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

      {/* CTA Section */}
      <section id="cta-section" className="w-screen h-screen md:p-6 text-white">
        <div className="w-full h-full md:rounded-lg overflow-hidden relative text-center flex flex-col justify-center items-center gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold z-10 text-center"
          >
            {cta}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl z-10 leading-relaxed"
          >
            Fill out this form and Orin will reach out to you.
            <br />
            No credit card required.
          </motion.p>

          <SignupForm
            phoneNumber={phoneNumber}
            email={email}
            parentName={parentName}
            studentName={studentName}
            studentGrade={studentGrade}
            isLoading={isLoading}
            handlePhoneChange={handlePhoneChange}
            setEmail={setEmail}
            setParentName={setParentName}
            setStudentName={setStudentName}
            setStudentGrade={setStudentGrade}
            onSubmit={handleSubmit}
          />

          <BackgroundGradient speed={speed} />
          <div
            className={cn(
              "absolute inset-0 rounded-lg pointer-events-none z-10",
              "shadow-[inset_2px_2px_8px_#00000044,_inset_-2px_-2px_8px_#ffffffbb] dark:shadow-none"
            )}
          />
        </div>
      </section>

      {/* Scroll for more info */}
      <motion.button
        {...scrollButtonProps}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // Only allow scrolling if we're at the top of the page
          if (scrollY === 0) {
            document.getElementById("cta-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
        className={cn(
          "fixed bg-neutral-800 dark:bg-neutral-200 right-4 bottom-4 rounded-lg",
          "px-2 py-1 w-fit mx-auto text-center text-white flex items-center gap-2 z-50",
          scrollY > 0 ? "pointer-events-none" : "pointer-events-auto"
        )}
      >
        Scroll
        <ChevronDownIcon className="w-4 h-4" />
      </motion.button>
    </>
  );
}

export default App;
