"use client";

import React, { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';
import { SocialProof } from '@/components/SocialProof';
import { useCopyVariation } from '@/hooks/useCopyVariation';

export default function HomePage() {
  const searchParams = useSearchParams();
  const { headline, subheadline } = useCopyVariation();
  const speed = 0.02; // Static speed for background gradients

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [searchParams]);

  return (
    <>
      <Hero headline={headline} subheadline={subheadline} speed={speed} />
      <HowItWorks speed={speed} className="border-t" />
      <SocialProof className="border-t" />
      <Pricing speed={speed} className="border-t" />
    </>
  );
}
