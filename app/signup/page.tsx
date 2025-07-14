"use client";

import React from 'react';

import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

import { SignupForm } from '@/components/SignupForm';
import { useSignupForm } from '@/hooks/useSignupForm';

export default function SignupPage() {
  const {
    phoneNumber,
    email,
    parentName,
    studentName,
    studentGrade,
    promoCode,
    isLoading,
    handlePhoneChange,
    setEmail,
    setParentName,
    setStudentName,
    setStudentGrade,
    setPromoCode,
    handleSubmit,
    handleReset,
    submitted,
  } = useSignupForm();

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <motion.div className="h-full flex flex-col justify-center items-center relative gap-4">
        <Link
          href="/"
          className="absolute top-4 left-4 flex items-center gap-2 text-gray-600"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </Link>

        {/* Form */}
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
          onSubmit={handleSubmit}
          onReset={handleReset}
        />
      </motion.div>

      <motion.div
        className="w-full h-full p-4 hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/hero.avif"
          alt="Signup"
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}
