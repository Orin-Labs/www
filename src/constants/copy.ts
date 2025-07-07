export const COPY_VARIATIONS = {
  control: {
    headline: "Meet Orin, your private tutor",
    subheadline: "Unlimited tutoring for $99/month",
    cta: "Get your own Orin",
  },
  variation1: {
    headline: "ROTATING_HEADLINE", // This will be handled specially in the Hero component
    subheadline: "$99/mo, unlimited tutoring",
    cta: "Get your own Orin",
  },
  variation2: {
    headline: "Tutoring for middle schoolers",
    subheadline: "Unlimited 3rd-8th grade tutoring - $99/mo",
    cta: "Get your own Orin",
  },
  variation3: {
    headline: "Learn with Orin",
    subheadline: "Private tutoring for 3rd-8th graders",
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
