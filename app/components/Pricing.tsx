import { HTMLProps } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { PRICING_COPY } from '../constants/copy';
import { cn } from '../utils';

interface PricingProps extends HTMLProps<HTMLElement> {
  speed: number;
}

export function Pricing({ speed, className, ...props }: PricingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="pricing"
      className={cn(
        "w-screen min-h-screen md:p-6 bg-white",
        "border-b  ",
        className
      )}
      {...props}
    >
      <div className="w-full min-h-screen md:rounded-lg overflow-hidden relative flex flex-col justify-center items-center px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center z-10"
        >
          {/* Header */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            {PRICING_COPY.headline}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12"
          >
            {PRICING_COPY.subheadline}
          </motion.p>

          {/* Pricing Cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            {/* Monthly Plan */}
            <div className="bg-white rounded-2xl p-8 border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {PRICING_COPY.monthly.title}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {PRICING_COPY.monthly.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {PRICING_COPY.monthly.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {PRICING_COPY.monthly.description}
                </p>
                <Link href="/signup">
                  <button className="w-full py-3 rounded-lg font-medium transition-all duration-300 bg-gray-900 text-white hover:bg-gray-800 shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className="bg-white rounded-2xl p-8 border shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-emerald-500 text-white text-sm px-4 py-1 rounded-full font-medium">
                  {PRICING_COPY.yearly.savings}
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {PRICING_COPY.yearly.title}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {PRICING_COPY.yearly.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {PRICING_COPY.yearly.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {PRICING_COPY.yearly.description}
                </p>
                <Link href="/signup">
                  <button className="w-full py-3 rounded-lg font-medium transition-all duration-300 bg-gray-900 text-white hover:bg-gray-800 shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
