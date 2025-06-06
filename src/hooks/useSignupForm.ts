import { useState } from 'react';

import { AsYouType } from 'libphonenumber-js';
import posthog from 'posthog-js';
import { toast } from 'sonner';

import { useCopyVariation } from './useCopyVariation';

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
  const [isLoading, setIsLoading] = useState(false);
  const [speed, setSpeed] = useState(0.02);
  const { cta } = useCopyVariation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

        // @ts-ignore
        fbq("track", "Lead");

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
        toast.error(data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formatter.reset();
    const formattedNumber = formatter.input(e.target.value);
    setPhoneNumber(formattedNumber);

    // @ts-ignore
    window.gtag("event", "conversion", {
      send_to: "AW-16902826455/6DXjCOCAha8aENfT8vs-",
      value: 1.0,
      currency: "USD",
    });
  };

  return {
    phoneNumber,
    isLoading,
    speed,
    handleSubmit,
    handlePhoneChange,
  };
}
