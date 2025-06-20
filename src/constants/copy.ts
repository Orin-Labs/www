export const COPY_VARIATIONS = {
  control: {
    headline: "Unlimited private tutoring",
    subheadline: "for just $99/month.",
    cta: "Free 2 week trial",
  },
} as const;

export type CopyVariation = keyof typeof COPY_VARIATIONS;
