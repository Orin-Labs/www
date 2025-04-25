import { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { MeshGradient } from '@paper-design/shaders-react';

export const COLORS = [
  "#ea89c8", // pink
  "#f5d2ab", // yellow
  "#5bb5f2", // blue
];

export const DARK_COLORS = [
  "#712CCC", // purple
  "#E72177", // pink
  "#2457FF", // blue
];

let delay = 0;
const getDelay = () => {
  const temp = delay;
  delay += 0.05;
  return temp;
};

function App() {
  const [speed, setSpeed] = useState(0.02);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 w-screen text-center h-screen flex items-center justify-center relative text-white">
      <AnimatePresence mode="wait">
        <motion.div
          className="relative z-10 flex flex-col gap-2 items-center justify-center p-6"
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
          <motion.h1
            className="text-6xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: getDelay() }}
          >
            The most powerful tutor ever created.
          </motion.h1>
          <motion.p
            className="text-gray-50 text-2xl mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: getDelay() }}
          >
            Powering the top students from 100+ districts.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3">
            <motion.div
              className="flex flex-col items-center py-2 border-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: getDelay() }}
            >
              <h1>99.9%</h1>
              <p className="text-gray-50 text-sm">Success Rate</p>
            </motion.div>
            <motion.div
              className="flex flex-col md:px-2 py-2 border-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: getDelay() }}
            >
              <h1>Top 5%</h1>
              <p className="text-gray-50 text-sm">of students</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center col-span-2 md:col-span-1 py-2 border-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: getDelay() }}
            >
              <h1>24/7</h1>
              <p className="text-gray-50 text-sm">Scheduling</p>
            </motion.div>
          </div>

          <motion.p
            className="text-gray-50 italic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: getDelay() }}
          >
            "Orin is the most effective tutor we've{" "}
            <br className="hidden md:block" /> ever had." -
            Julian, Sophomore Parent
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: getDelay() }}
          >
            <motion.button
              className="bg-white text-black mix-blend-screen flex items-center gap-2 px-4 py-2 rounded-md"
              animate={{
                y: 0,
                boxShadow:
                  "2px 2px 8px rgba(0, 0, 0, 0.15), -2px -2px 8px rgba(255, 255, 255, 0.15)",
              }}
              whileHover={{
                boxShadow:
                  "3px 3px 8px rgba(0, 0, 0, 0.2), -3px -3px 8px rgba(255, 255, 255, 0.2)",
                transition: {
                  duration: 0.1,
                  delay: 0,
                },
              }}
              whileTap={{
                y: 2,
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.15), -1px -1px 4px rgba(255, 255, 255, 0.15)",
                transition: {
                  duration: 0.1,
                  delay: 0,
                },
              }}
              transition={{ duration: 0.1 }}
              onClick={() => {
                setSpeed(0.5);
                setTimeout(() => {
                  // @ts-ignore
                  window.gtag("event", "conversion", {
                    send_to: "AW-16902826455/6DXjCOCAha8aENfT8vs-",
                    value: 1.0,
                    currency: "USD",
                  });
                  window.location.href =
                    "https://getwaitlist.com/waitlist/27320";
                }, 1000);
              }}
            >
              Apply for Early Access
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 md:p-6 dark:hidden block"
        initial={{
          opacity: 0,
          filter: "blur(10px) saturate(0) brightness(0.5)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px) saturate(1) brightness(0.85)",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:rounded-xl w-full h-full overflow-hidden">
          <MeshGradient
            color1={COLORS[0]}
            color2={COLORS[1]}
            color3={COLORS[2]}
            speed={speed}
            seed={0}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 md:p-6 hidden dark:block"
        initial={{
          opacity: 0,
          filter: "blur(10px) saturate(0) brightness(0.5)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px) saturate(1) brightness(0.8)",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:rounded-xl w-full h-full overflow-hidden">
          <MeshGradient
            color1={DARK_COLORS[0]}
            color2={DARK_COLORS[1]}
            color3={DARK_COLORS[2]}
            seed={1}
            speed={speed}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </motion.div>

      <footer className="absolute bottom-0 left-0 right-0 text-xs mb-1 flex justify-between items-center px-8 text-gray-300">
        <p>&copy; 2025 Orin Labs. All rights reserved.</p>
        <a href="/privacy" className="text-gray-300">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}

export default App;
