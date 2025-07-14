import React, {
  useEffect,
  useRef,
} from 'react';

import { motion } from 'framer-motion';
import { useHover } from 'usehooks-ts';

import { BackgroundGradient } from '@/components/BackgroundGradient';
import { cn } from '@/utils';

export function Odyssey({ bg = "transparent" }: { bg?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(containerRef);

  useEffect(() => {
    // Defer loading of Beehiiv scripts until component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load scripts when component comes into view
            const embedScript = document.createElement("script");
            embedScript.async = true;
            embedScript.src = "https://subscribe-forms.beehiiv.com/embed.js";
            document.head.appendChild(embedScript);

            const attributionScript = document.createElement("script");
            attributionScript.async = true;
            attributionScript.src =
              "https://subscribe-forms.beehiiv.com/attribution.js";
            document.head.appendChild(attributionScript);

            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "w-full max-w-full border pt-8 md:pt-0 rounded-lg overflow-hidden justify-center",
        "relative shadow-lg hidden md:flex"
      )}
      whileHover={{
        scale: 1.005,
        transition: {
          duration: 0.1,
        },
      }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: bg }}
      ></div>
      <iframe
        title="Subscribe to Orin's Blog"
        src="https://subscribe-forms.beehiiv.com/1df3b255-c4c1-4e5b-80e8-5e9105565a3e"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        style={{
          width: "100%",
          maxWidth: "min(100%, 984px)",
          height: "339px",
          backgroundColor: "transparent",
          margin: 0,
          zIndex: 10,
        }}
      />

      <BackgroundGradient speed={isHovered ? 0.25 : 0.01} />
    </motion.div>
  );
}
