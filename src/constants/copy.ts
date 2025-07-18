export const COPY_VARIATIONS = {
  control: {
    headline:
      "AI tutoring built for <span class='text-pink-700'>families</span>",
    subheadline:
      "Crush state benchmarks with as little as <span class='text-pink-700'>one hour a day</span>",
    cta: "Get your own Orin",
  },
  "top-scores": {
    headline:
      "Top math scores with as little as <span class='text-pink-700'>one hour a day</span>.",
    subheadline: "Work with an AI tutor built for middle school families.",
    cta: "Get your own Orin",
  },
} as const;

export type CopyVariation = keyof typeof COPY_VARIATIONS;

// Pricing copy
export const PRICING_COPY = {
  headline: "Simple, transparent pricing",
  subheadline: "Choose the plan that works best for your family",
  monthly: {
    title: "Monthly",
    price: "$49",
    period: "per month",
    description: "Perfect for trying out Orin",
  },
  yearly: {
    title: "Yearly",
    price: "$399",
    period: "per year",
    description: "Save $200 with annual billing",
    savings: "Save $200",
  },
  features: [
    "Unlimited tutoring sessions",
    "24/7 availability",
    "Personalized learning paths",
    "Progress tracking",
    "Parent insights",
    "Multi-subject support",
  ],
} as const;
