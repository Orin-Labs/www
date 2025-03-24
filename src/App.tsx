import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Cal from "@calcom/embed-react";
import { MeshGradient } from "@paper-design/shaders-react";

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
  const [show, setShow] = useState(true);
  const [speed, setSpeed] = useState(0.02);
  const isDark = document.documentElement.classList.contains("dark");

  return (
    <div className="bg-gray-100 dark:bg-gray-900 w-screen text-center h-screen flex items-center justify-center relative text-white">
      <AnimatePresence mode="wait">
        {show && (
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
              Learn with Orin.
            </motion.h1>
            <motion.p
              className="text-gray-50 text-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: getDelay() }}
            >
              Personalized SAT tutoring, powered by AI.
            </motion.p>

            <div className="flex flex-col md:flex-row mt-4">
              <motion.div
                className="flex flex-col items-center md:pr-6 py-2 border-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: getDelay() }}
              >
                <h1>99%</h1>
                <p className="text-gray-50 text-sm">success rate</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center md:px-6 py-2 border-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: getDelay() }}
              >
                <h1>100+ hrs</h1>
                <p className="text-gray-50 text-sm">
                  spent on every student per week
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center md:pl-6 py-2 border-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: getDelay() }}
              >
                <h1>24/7</h1>
                <p className="text-gray-50 text-sm">availability</p>
              </motion.div>
            </div>

            <motion.p
              className="text-gray-50 italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: getDelay() }}
            >
              "It's like having a full-time tutor for the price of a single
              session."
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
                  // @ts-ignore
                  gtag("event", "conversion", {
                    send_to: "AW-16902826455/6DXjCOCAha8aENfT8vs-",
                    value: 1.0,
                    currency: "USD",
                  });
                  setShow(false);
                  setSpeed(0.5);
                  setTimeout(() => {
                    setSpeed(0.02);
                  }, 3000);
                }}
              >
                Book a fit call
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {!show && (
          <motion.div
            className="sm:p-6 z-10 my-auto mx-auto w-full md:w-[90%] md:max-h-[90%] relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            exit={{
              opacity: 0,
              y: 10,
            }}
          >
            <Cal
              calLink="bryan-houlton-5uvxqc/beta-onboarding"
              config={{ theme: isDark ? "dark" : "light" }}
              className="w-full overflow-y-auto max-h-screen md:max-h-[90vh] rounded-xl"
            />
          </motion.div>
        )}
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
