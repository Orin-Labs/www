export const COPY_VARIATIONS = {
  control: {
    headline: "Academic excellence, handled.",
    subheadline: "Hi! I'm Orin, the most effective AI tutor ever created.",
    cta: "Enter your phone number for a free lesson",
  },
  variation1: {
    headline: "Your child's success, simplified.",
    subheadline:
      "Meet Orin, the AI tutor that adapts to your child's unique learning style.",
    cta: "Free lesson, on us.",
  },
  variation2: {
    headline: "Personalized learning, powered by AI.",
    subheadline:
      "I'm Orin, and I'm here to transform your child's academic journey.",
    cta: "Book your free trial lesson",
  },
  variation3: {
    headline: "The future of tutoring is here.",
    subheadline: "Hi! I'm Orin, your child's 24/7 AI learning companion.",
    cta: "Try a free lesson today",
  },
  variation4: {
    headline: "Smart tutoring for modern students.",
    subheadline:
      "I'm Orin, the AI tutor that makes learning personal and effective.",
    cta: "Get started with a free lesson",
  },
} as const;

export type CopyVariation = keyof typeof COPY_VARIATIONS;
