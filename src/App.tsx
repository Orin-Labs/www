import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';

import { CTASection } from './components/CTASection';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { SeamlessCoordination } from './components/SeamlessCoordination';
import { SocialProof } from './components/SocialProof';
import { useCopyVariation } from './hooks/useCopyVariation';
import { useSignupForm } from './hooks/useSignupForm';
import { cn } from './utils';

function App() {
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
    speed,
    submitted,
    handleSubmit,
    handleReset,
  } = useSignupForm();
  const { headline, subheadline, cta } = useCopyVariation();
  const [scrollY, setScrollY] = useState(0);

  // Memoize scroll button animation props
  const scrollButtonProps = useMemo(
    () => ({
      initial: { opacity: 0, y: 10 },
      animate: {
        opacity: scrollY === 0 ? 1 : 0,
        y: scrollY === 0 ? 0 : 10,
      },
      transition: { duration: 0.3 },
    }),
    [scrollY]
  );

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get("scrollTo");
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero headline={headline} subheadline={subheadline} speed={speed} />

      {/* How It Works Section */}
      <HowItWorks
        speed={speed}
        className="border-t border-gray-100 dark:border-gray-800"
      />

      {/* Social Proof Section */}
      <SocialProof className="border-t border-gray-100 dark:border-gray-800" />

      {/* Seamless Coordination Section */}
      <SeamlessCoordination speed={speed} />

      {/* Pricing Section */}
      <Pricing
        speed={speed}
        className="border-t border-gray-100 dark:border-gray-800"
      />

      {/* CTA Section */}
      <CTASection
        cta={cta}
        speed={speed}
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

      {/* Scroll for more info */}
      <motion.button
        {...scrollButtonProps}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // Only allow scrolling if we're at the top of the page
          if (scrollY === 0) {
            document.getElementById("cta-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
        className={cn(
          "fixed bg-neutral-800 dark:bg-neutral-200 right-4 bottom-4 rounded-lg",
          "px-2 py-1 w-fit mx-auto text-center text-white dark:text-black flex items-center gap-2 z-50",
          scrollY > 0 ? "pointer-events-none" : "pointer-events-auto"
        )}
      >
        Scroll
        <ChevronDownIcon className="w-4 h-4" />
      </motion.button>
    </>
  );
}

export default App;
