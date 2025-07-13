import {
  TargetAndTransition,
  Transition,
} from 'framer-motion';

function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

const parseLinksInText = (text: string): React.ReactNode => {
  return text
    .split(/(<a href=['"][^'"]*['"]>[^<]*<\/a>)/)
    .map((part, index) => {
      const linkMatch = part.match(/^<a href=['"]([^'"]*)['"]>(.*?)<\/a>$/);
      if (linkMatch) {
        const [, href, text] = linkMatch;
        return (
          <a href={href} key={index} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        );
      }
      return part;
    });
};

const delayed = (
  delay: number
): {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
} => ({
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay,
    duration: 0.3,
    ease: "easeOut",
  },
});

export { cn, delayed, parseLinksInText };
export * from "./nest";
