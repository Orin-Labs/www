import { useState } from 'react';

import { AsYouType } from 'libphonenumber-js';
import posthog from 'posthog-js';
import { toast } from 'sonner';
import useLocalStorageState from 'use-local-storage-state';

import { COPY_VARIATIONS } from '@/constants/copy';

const formatter = new AsYouType("US");

function getSource() {
  const utmSource = new URLSearchParams(window.location.search).get(
    "utm_source"
  );
  if (utmSource === "koah") {
    return "koah";
  }
  const hasGclid = window.location.search.includes("gclid");
  if (hasGclid) {
    return "google_ads";
  }
  const hasFbclid = window.location.search.includes("fbclid");
  if (hasFbclid) {
    return "facebook_ads";
  }
  return undefined;
}

export function useSignupForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [speed, setSpeed] = useState(0.02);
  const [submitted, setSubmitted] = useLocalStorageState("signup-submitted", {
    defaultValue: false,
  });
  const { cta } = COPY_VARIATIONS.control;

  const handleSubmit = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setSpeed(0.05);

    try {
      const response = await fetch(
        "https://api.learnwithorin.com/api/entities/signup/",
        {
          method: "POST",
          body: JSON.stringify({
            phone_number: formatter.getNumberValue(),
            email: email,
            parent_name: parentName,
            student_name: studentName,
            student_grade: studentGrade,
            promo_code: promoCode || undefined,
            source: getSource(),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setSpeed(0.02);

      if (data.message === "Success") {
        toast.info("Great! Orin will be in touch soon.");
        setPhoneNumber("");
        setEmail("");
        setParentName("");
        setStudentName("");
        setStudentGrade("");
        setPromoCode("");
        setSubmitted(true);
        // @ts-ignore
        fbq("track", "Lead");

        // @ts-ignore
        kad("track", "Lead");

        // @ts-ignore
        window.gtag("event", "conversion", {
          send_to: "AW-16902826455/6DXjCOCAha8aENfT8vs-",
          value: 1.0,
          currency: "USD",
        });

        posthog.capture("input_phone_number", {
          cta_variation: cta,
        });
      } else {
        setSubmitted(false);
        toast.error(data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneChange = (number: string) => {
    formatter.reset();
    const formattedNumber = formatter.input(number);
    setPhoneNumber(formattedNumber);

    // @ts-ignore
    window.gtag("event", "conversion", {
      send_to: "AW-16902826455/6DXjCOCAha8aENfT8vs-",
      value: 1.0,
      currency: "USD",
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setPhoneNumber("");
    setEmail("");
    setParentName("");
    setStudentName("");
    setStudentGrade("");
    setPromoCode("");
  };

  return {
    phoneNumber,
    email,
    parentName,
    studentName,
    studentGrade,
    promoCode,
    isLoading,
    speed,
    submitted,
    handleSubmit,
    handlePhoneChange,
    handleReset,
    setEmail,
    setParentName,
    setStudentName,
    setStudentGrade,
    setPromoCode,
  };
}
