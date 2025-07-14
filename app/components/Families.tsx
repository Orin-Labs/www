import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';

import {
  cn,
  delayed,
} from '@/utils';

const FAMILY_IMAGES: string[] = [
  "/families/1.jpg",
  "/families/2.jpg",
  "/families/3.jpg",
];

interface FamiliesProps extends HTMLMotionProps<"div"> {
  text?: string;
}

export function Families({
  className,
  text = "Join the hundreds of families working with Orin to get ahead",
  ...props
}: FamiliesProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col sm:flex-row sm:items-center gap-4",
        className
      )}
      {...delayed(0.2)}
      {...props}
    >
      <div className="-space-x-6 flex shrink-0">
        {FAMILY_IMAGES.map((image, index) => (
          <motion.img
            key={index}
            {...delayed(0.2 + index * 0.1)}
            className="w-12 h-12 rounded-full border bg-white object-cover"
            src={image}
          />
        ))}
      </div>

      <span className="leading-none w-64 text-gray-500">{text}</span>
    </motion.div>
  );
}
