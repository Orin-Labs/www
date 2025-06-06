import { motion } from 'framer-motion';
import {
  ArrowRight,
  Loader2,
} from 'lucide-react';

import { useCopyVariation } from '../hooks/useCopyVariation';
import { useSignupForm } from '../hooks/useSignupForm';

export function SignupForm() {
  const { phoneNumber, isLoading, handleSubmit, handlePhoneChange } =
    useSignupForm();
  const { cta } = useCopyVariation();

  return (
    <motion.form
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
      key="invite-button-container"
      onSubmit={handleSubmit}
    >
      <label htmlFor="phone-number" className="text-gray-50 text-sm">
        {cta}
      </label>
      <div className="flex gap-2 items-center">
        <motion.input
          type="tel"
          className="bg-transparent placeholder:text-gray-100 text-white outline-none p-2 rounded-md border-white border"
          placeholder="Your Phone number"
          autoFocus
          disabled={isLoading}
          value={phoneNumber}
          onChange={handlePhoneChange}
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
  );
}
