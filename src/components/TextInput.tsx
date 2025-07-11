import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';

import { cn } from '../utils';

export interface TextInputProps
  extends Omit<HTMLMotionProps<"input">, "onChange"> {
  onChange?: (value: string) => void;
}

export function TextInput({ className, onChange, ...props }: TextInputProps) {
  return (
    <motion.input
      onChange={(e) => onChange?.(e.target.value)}
      className={cn(
        "p-3 bg-transparent rounded-lg text-gray-800 outline-none",
        "border border-gray-400 transition-all duration-500",
        "focus:shadow-[inset_2px_2px_2px_#545759,_inset_-2px_-2px_2px_#edeff0] focus:border-transparent",
        className
      )}
      {...props}
    />
  );
}
