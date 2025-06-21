import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';
import { isValidPhoneNumber } from 'libphonenumber-js';
import {
  ArrowRight,
  Loader2,
} from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'sonner';

interface SignupFormProps extends Omit<HTMLMotionProps<"form">, "onSubmit"> {
  phoneNumber: string;
  email: string;
  parentName: string;
  studentName: string;
  studentGrade: string;
  isLoading: boolean;
  handlePhoneChange: (number: string) => void;
  setEmail: (email: string) => void;
  setParentName: (name: string) => void;
  setStudentName: (name: string) => void;
  setStudentGrade: (grade: string) => void;
  onSubmit: (phoneNumber: string) => void;
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
  isLoading,
  handlePhoneChange,
  setEmail,
  setParentName,
  setStudentName,
  setStudentGrade,
  onSubmit,
  ...props
}: SignupFormProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.form
      className="flex flex-col gap-4 items-center z-10 w-full max-w-md"
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
        }
        if (!isValidPhoneNumber(phoneNumber)) {
          toast.error("Please enter a valid phone number");
        }
        if (!isValidEmail(email)) {
          toast.error("Please enter a valid email");
        }
        onSubmit(phoneNumber);
      }}
      {...props}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <motion.input
          type="text"
          className="bg-transparent placeholder:text-[#ffffff99] text-white outline-none p-3 rounded-md border-white border"
          placeholder="Parent Name"
          autoFocus={!isMobile}
          disabled={isLoading}
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
        <motion.input
          type="text"
          className="bg-transparent placeholder:text-[#ffffff99] text-white outline-none p-3 rounded-md border-white border"
          placeholder="Student Name"
          disabled={isLoading}
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <motion.input
          type="email"
          className="bg-transparent placeholder:text-[#ffffff99] text-white outline-none p-3 rounded-md border-white border"
          placeholder="Parent Email"
          disabled={isLoading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.select
          className="bg-transparent placeholder:text-[#ffffff99] text-white outline-none p-3 rounded-md border-white border"
          disabled={isLoading}
          value={studentGrade}
          onChange={(e) => setStudentGrade(e.target.value)}
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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

      <div className="flex gap-2 items-center w-full">
        <motion.input
          type="tel"
          className="bg-transparent placeholder:text-[#ffffff99] text-white outline-none p-3 rounded-md border-white border flex-1"
          placeholder="Parent Phone Number"
          disabled={isLoading}
          value={phoneNumber}
          onChange={(e) => handlePhoneChange(e.target.value)}
          key="invite-text"
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.button
          type="submit"
          className="bg-white text-black mix-blend-screen flex justify-center items-center gap-2 h-12 w-12 rounded-md"
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
          disabled={isLoading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
