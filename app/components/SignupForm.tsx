import { useState } from 'react';

import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Loader2,
} from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'sonner';

import { cn } from '@/utils';

import { Button } from '../Button';
import { Families } from './Families';

interface SignupFormProps extends Omit<HTMLMotionProps<"form">, "onSubmit"> {
  phoneNumber: string;
  email: string;
  parentName: string;
  studentName: string;
  studentGrade: string;
  promoCode: string;
  isLoading: boolean;
  submitted: boolean;
  handlePhoneChange: (number: string) => void;
  setEmail: (email: string) => void;
  setParentName: (name: string) => void;
  setStudentName: (name: string) => void;
  setStudentGrade: (grade: string) => void;
  setPromoCode: (code: string) => void;
  onSubmit: (phoneNumber: string) => void;
  onReset: () => void;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function SignupForm({
  phoneNumber,
  email,
  parentName,
  studentName,
  studentGrade,
  promoCode,
  isLoading,
  submitted,
  handlePhoneChange,
  setEmail,
  setParentName,
  setStudentName,
  setStudentGrade,
  setPromoCode,
  onSubmit,
  onReset,
  ...props
}: SignupFormProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [hasPromoCode, setHasPromoCode] = useState(false);

  const inputClass =
    "bg-transparent outline-none p-3 rounded-md border focus:ring-2 ring-offset-2";

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col gap-6 items-center px-4 z-10 w-full max-w-md text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <h3 className="text-4xl mb-2">Thank You!</h3>
          <p className="text-gray-600">
            Orin will be in touch soon to set up your first lesson.
          </p>
        </div>

        <Button
          type="button"
          bg="gray"
          onClick={onReset}
          shadow="neu"
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Submit Again
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      className="flex flex-col gap-4 items-center px-4 z-10 w-full max-w-md"
      key="invite-button-container"
      onSubmit={(e) => {
        e.preventDefault();
        if (
          !phoneNumber ||
          !email ||
          !parentName ||
          !studentName ||
          !studentGrade
        ) {
          toast.error("Please fill out all fields");
          return;
        }
        if (!isValidEmail(email)) {
          toast.error("Please enter a valid email");
          return;
        }
        onSubmit(phoneNumber);
      }}
      {...props}
    >
      <div className="text-center">
        <motion.h1 className="text-3xl font-bold text-gray-900">
          Start Free Trial
        </motion.h1>
        <motion.p className="text-gray-600">
          No credit card required.{" "}
          <span className="text-pink-600">Cancel anytime.</span>
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <motion.input
          type="text"
          className={inputClass}
          placeholder="Parent Name"
          autoFocus={!isMobile}
          disabled={isLoading}
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          required
        />
        <motion.input
          type="email"
          className={inputClass}
          placeholder="Parent Email"
          disabled={isLoading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <motion.input
          type="text"
          className={inputClass}
          placeholder="Student Name"
          disabled={isLoading}
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
        <motion.select
          className={inputClass}
          disabled={isLoading}
          value={studentGrade}
          onChange={(e) => setStudentGrade(e.target.value)}
          required
        >
          <option value="" className="bg-gray-800">
            Student Grade
          </option>
          <option value="K" className="bg-gray-800">
            Kindergarten
          </option>
          <option value="1" className="bg-gray-800">
            1st Grade
          </option>
          <option value="2" className="bg-gray-800">
            2nd Grade
          </option>
          <option value="3" className="bg-gray-800">
            3rd Grade
          </option>
          <option value="4" className="bg-gray-800">
            4th Grade
          </option>
          <option value="5" className="bg-gray-800">
            5th Grade
          </option>
          <option value="6" className="bg-gray-800">
            6th Grade
          </option>
          <option value="7" className="bg-gray-800">
            7th Grade
          </option>
          <option value="8" className="bg-gray-800">
            8th Grade
          </option>
          <option value="9" className="bg-gray-800">
            9th Grade
          </option>
          <option value="10" className="bg-gray-800">
            10th Grade
          </option>
          <option value="11" className="bg-gray-800">
            11th Grade
          </option>
          <option value="12" className="bg-gray-800">
            12th Grade
          </option>
        </motion.select>
      </div>

      <motion.div className="flex gap-2 items-center w-full">
        <input
          type="tel"
          className={`${inputClass} flex-1`}
          placeholder="Parent Phone Number"
          disabled={isLoading}
          value={phoneNumber}
          onChange={(e) => handlePhoneChange(e.target.value)}
          key="invite-text"
          required
        />
        <motion.button
          type="submit"
          className={cn(
            "bg-gray-900 text-white flex justify-center",
            "items-center gap-2 h-12 w-12 rounded-md"
          )}
          animate={{
            y: 0,
            boxShadow:
              "2px 2px 8px rgba(0, 0, 0, 0.15), -2px -2px 8px rgba(255, 255, 255, 0.15)",
          }}
          whileHover={{
            boxShadow:
              "3px 3px 8px rgba(0, 0, 0, 0.2), -3px -3px 8px rgba(255, 255, 255, 0.2)",
          }}
          whileTap={{
            y: 1,
            boxShadow:
              "1px 1px 4px rgba(0, 0, 0, 0.15), -1px -1px 4px rgba(255, 255, 255, 0.15)",
          }}
          disabled={isLoading}
          transition={{ duration: 0.1 }}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </motion.button>
      </motion.div>

      {hasPromoCode && (
        <input
          type="text"
          className={`${inputClass} w-full`}
          placeholder="Promo Code (optional)"
          disabled={isLoading}
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
      )}

      <Families />

      {!hasPromoCode && (
        <motion.span
          className="text-sm hover:underline hover:text-pink-600 cursor-pointer"
          onClick={() => setHasPromoCode(true)}
        >
          I have a promo code
        </motion.span>
      )}

      {hasPromoCode && (
        <span
          className="text-sm hover:underline hover:text-pink-600 cursor-pointer"
          onClick={() => setHasPromoCode(false)}
        >
          Back
        </span>
      )}
    </motion.form>
  );
}
