import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { AsYouType } from "libphonenumber-js";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

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

const testimonials = [
  {
    quote:
      "Orin is just incredible. I never thought AI // would be this powerful.",
    source: "Julian's mom",
  },
  {
    quote:
      "The personalized approach is exactly what my daughter needed. // Her grades have improved dramatically.",
    source: "Emma's mom",
  },
  {
    quote:
      "Orin adapts to my son's learning style perfectly.// It's like having a private tutor available 24/7.",
    source: "Jaron's parents",
  },
  {
    quote: "Somehow everything is handled. //I'm so impressed.",
    source: "Sarah's dad",
  },
];

const formatter = new AsYouType("US");

let delay = 0;
const getDelay = () => {
  const temp = delay;
  delay += 0.05;
  return temp;
};

function App() {
  const [speed, setSpeed] = useState(0.02);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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
            Academic excellence, handled.
          </motion.h1>
          <motion.p
            className="text-gray-50 text-xl md:text-2xl mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: getDelay() }}
          >
            Hi! I'm Orin, the most effective AI tutor ever created.
          </motion.p>

          <div className="grid grid-cols-2 gap-4 my-8 md:my-4 md:grid-cols-3">
            <motion.div
              className="flex flex-col items-center py-2 border-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: getDelay() }}
            >
              <h1>6-12th</h1>
              <p className="text-gray-50 text-sm">grade range</p>
            </motion.div>
            <motion.div
              className="flex flex-col md:px-2 py-2 border-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: getDelay() }}
            >
              <h1>100+</h1>
              <p className="text-gray-50 text-sm">districts served</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center col-span-2 md:col-span-1 py-2 border-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: getDelay() }}
            >
              <h1>1:1</h1>
              <p className="text-gray-50 text-sm">sessions</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: getDelay() }}
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
                        testimonials[currentTestimonial].quote.split("//")
                          .length -
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
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: getDelay() }}
        >
          <motion.form
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            key="invite-button-container"
            onSubmit={(e) => {
              e.preventDefault();
              if (isLoading) return;

              setIsLoading(true);
              setSpeed(0.05);
              fetch("https://api.learnwithorin.com/api/entities/signup/", {
                method: "POST",
                body: JSON.stringify({
                  phone_number: formatter.getNumberValue(),
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => res.json())
                .then((data) => {
                  setSpeed(0.02);
                  if (data.message === "Success") {
                    toast.info("Great! Orin will be in touch soon.");
                    setPhoneNumber("");
                  } else {
                    toast.error(data.message);
                  }
                })
                .finally(() => {
                  setIsLoading(false);
                });
            }}
          >
            <label htmlFor="phone-number" className="text-gray-50 text-sm">
              Enter your phone number for a free lesson
            </label>
            <div className="flex gap-2 items-center">
              <motion.input
                type="tel"
                className="bg-transparent placeholder:text-gray-100 text-white outline-none p-2 rounded-md border-white border"
                placeholder="Your Phone number"
                autoFocus
                disabled={isLoading}
                value={phoneNumber}
                onChange={(e) => {
                  formatter.reset();
                  const formattedNumber = formatter.input(e.target.value);
                  setPhoneNumber(formattedNumber);

                  // @ts-ignore
                  window.gtag("event", "conversion", {
                    send_to: "AW-16902826455/6DXjCOCAha8aENfT8vs-",
                    value: 1.0,
                    currency: "USD",
                  });
                }}
                key="invite-text"
              />
              <motion.button
                type="submit"
                className="bg-white text-black mix-blend-screen flex justify-center items-center gap-2 h-10 w-10 rounded-md"
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
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </motion.div>

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

      <footer className="hidden md:flex absolute bottom-0 left-0 right-0 text-xs mb-1 justify-between items-center px-8 text-gray-300">
        <p>&copy; 2025 Orin Labs. All rights reserved.</p>
        <a href="/privacy" className="text-gray-300">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}

export default App;
