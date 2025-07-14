"use client";

import { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

export function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [searchParams]);

  return null;
}
