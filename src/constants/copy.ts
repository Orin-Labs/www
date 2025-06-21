export const COPY_VARIATIONS = {
  control: {
    headline: "Meet Orin, your private tutor.",
    subheadline: "unlimited tutoring for $99/month.",
    cta: "Get your own Orin",
  },
} as const;

export type CopyVariation = keyof typeof COPY_VARIATIONS;
