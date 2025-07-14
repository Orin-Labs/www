import React, { Suspense } from 'react';

import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { ScrollHandler } from './components/ScrollHandler';
import { SocialProof } from './components/SocialProof';
import { COPY_VARIATIONS } from './constants/copy';

export default function HomePage() {
  const { headline, subheadline } = COPY_VARIATIONS.control;
  const speed = 0.02;

  return (
    <>
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <Hero headline={headline} subheadline={subheadline} speed={speed} />
      <HowItWorks speed={speed} className="border-t" />
      <SocialProof className="border-t" />
      <Pricing speed={speed} className="border-t" />
    </>
  );
}
