import { motion } from 'framer-motion';

import { BackgroundGradient } from './components/BackgroundGradient';
import { SignupForm } from './components/SignupForm';
import { Stats } from './components/Stats';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { useCopyVariation } from './hooks/useCopyVariation';
import { useSignupForm } from './hooks/useSignupForm';

let delay = 0;
const getDelay = () => {
  const temp = delay;
  delay += 0.05;
  return temp;
};

function App() {
  const { speed } = useSignupForm();
  const copy = useCopyVariation();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 overflow-y-auto w-screen text-center h-screen flex items-center justify-center relative text-white">
      <motion.div
        className="relative z-10 flex h-full flex-col gap-8 items-center justify-center px-6 md:py-6"
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 10,
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          key="call-not-started"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: getDelay() }}
          >
            {copy.headline}
          </motion.h1>
          <motion.p
            className="text-gray-50 text-xl md:text-2xl mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: getDelay() }}
          >
            {copy.subheadline}
          </motion.p>

          <Stats />
          <TestimonialCarousel />
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: getDelay() }}
        >
          <SignupForm />
        </motion.div>
      </motion.div>

      <BackgroundGradient speed={speed} />

      <footer className="hidden md:grid grid-cols-3 absolute bottom-0 left-0 right-0 text-xs mb-1 justify-between items-center px-8 text-gray-300">
        <p className="text-left">&copy; 2025 Orin Labs. All rights reserved.</p>
        <p className="text-center">
          By entering your phone number, you agree to be reached out to by Orin
          Labs.
        </p>
        <a href="/privacy" className="text-gray-300 text-right">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}

export default App;
