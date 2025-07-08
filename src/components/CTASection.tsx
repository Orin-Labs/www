import { HTMLProps } from "react";

import { motion } from "framer-motion";

import { cn } from "../utils";
import { BackgroundGradient } from "./BackgroundGradient";
import { SignupForm } from "./SignupForm";

interface CTASectionProps extends Omit<HTMLProps<HTMLElement>, "onSubmit"> {
  cta: string;
  speed: number;
  phoneNumber: string;
  email: string;
  parentName: string;
  studentName: string;
  studentGrade: string;
  promoCode: string;
  isLoading: boolean;
  submitted: boolean;
  handlePhoneChange: (value: string) => void;
  setEmail: (value: string) => void;
  setParentName: (value: string) => void;
  setStudentName: (value: string) => void;
  setStudentGrade: (value: string) => void;
  setPromoCode: (value: string) => void;
  onSubmit: (phoneNumber: string) => void;
  onReset: () => void;
}

export function CTASection({
  cta,
  speed,
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
  className,
  ...props
}: CTASectionProps) {
  return (
    <section
      id="cta-section"
      className={cn(
        "w-screen h-screen bg-gray-50 md:p-6 text-white",
        className
      )}
      {...props}
    >
      <div className="w-full h-full md:rounded-lg overflow-hidden relative text-center flex flex-col justify-center items-center gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold z-10 text-center mx-2"
        >
          {cta}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl z-10 leading-relaxed mx-2"
        >
          Orin will reach out to you with a free 2 week trial.
          <br />
          No credit card required.
        </motion.p>

        <SignupForm
          phoneNumber={phoneNumber}
          email={email}
          parentName={parentName}
          studentName={studentName}
          studentGrade={studentGrade}
          promoCode={promoCode}
          isLoading={isLoading}
          submitted={submitted}
          handlePhoneChange={handlePhoneChange}
          setEmail={setEmail}
          setParentName={setParentName}
          setStudentName={setStudentName}
          setStudentGrade={setStudentGrade}
          setPromoCode={setPromoCode}
          onSubmit={onSubmit}
          onReset={onReset}
        />

        <BackgroundGradient speed={speed} />
        <div
          className={cn(
            "absolute inset-0 rounded-lg pointer-events-none z-10",
            "shadow-[inset_2px_2px_8px_#00000044,_inset_-2px_-2px_8px_#ffffffbb] dark:shadow-none"
          )}
        />
      </div>
    </section>
  );
}
