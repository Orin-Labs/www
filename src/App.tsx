import { useEffect } from 'react';

import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { SocialProof } from './components/SocialProof';
import { useCopyVariation } from './hooks/useCopyVariation';

function App() {
  const { headline, subheadline } = useCopyVariation();
  const speed = 0.02; // Static speed for background gradients

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
      <Hero headline={headline} subheadline={subheadline} speed={speed} />
      <HowItWorks speed={speed} className="border-t  " />
      <SocialProof className="border-t  " />
      <Pricing speed={speed} className="border-t  " />
    </>
  );
}

export default App;
