"use client";

import { useEffect } from 'react';

import posthog from 'posthog-js';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Defer PostHog initialization to improve initial page load
    const timer = setTimeout(() => {
      if (
        typeof window !== "undefined" &&
        window.location.hostname !== "localhost"
      ) {
        posthog.init("phc_GumBfH2sDPA0iuqX5XN7e0JX2sR7uPUXCmdK3KMoWb0", {
          api_host: "https://d3nk0c1kx1c6s3.cloudfront.net",
          ui_host: "https://us.posthog.com",
          person_profiles: "always",
        });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
}
