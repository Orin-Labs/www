import { motion } from "framer-motion";

let delay = 0;
const getDelay = () => {
  const temp = delay;
  delay += 0.05;
  return temp;
};

export function Stats() {
  return (
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
        <p className="text-gray-50 text-sm">families trust Orin</p>
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
  );
}
