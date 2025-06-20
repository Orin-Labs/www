import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';
import {
  ArrowRight,
  Loader2,
} from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

import { useCopyVariation } from '../hooks/useCopyVariation';

interface SignupFormProps extends Omit<HTMLMotionProps<"form">, "onSubmit"> {
  phoneNumber: string;
  isLoading: boolean;
  handlePhoneChange: (number: string) => void;
  onSubmit: (phoneNumber: string) => void;
}

export function SignupForm({
  phoneNumber,
  isLoading,
  handlePhoneChange,
  onSubmit,
  ...props
}: SignupFormProps) {
  const { cta } = useCopyVariation();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.form
      className="flex flex-col gap-2 items-center"
      key="invite-button-container"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(phoneNumber);
      }}
      {...props}
    >
      <label htmlFor="phone-number" className="text-gray-50 text-sm">
        {cta}
      </label>
      <div className="flex gap-2 items-center">
        <motion.input
          type="tel"
          className="bg-transparent placeholder:text-gray-100 text-white outline-none p-2 rounded-md border-white border"
          placeholder="Your Phone number"
          autoFocus={!isMobile}
          disabled={isLoading}
          value={phoneNumber}
          onChange={(e) => handlePhoneChange(e.target.value)}
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
