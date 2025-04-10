import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';
import { cn } from 'slate-ui';

export type ButtonProps = HTMLMotionProps<"button"> & {
  shadow?: "float" | "neu";
};

export function Button({
  children,
  className,
  disabled,
  shadow = "float",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={cn(
        "px-3 py-2 rounded-lg flex items-center justify-center bg-gray-800 text-white",
        "disabled:cursor-not-allowed transition-all duration-50 active:translate-y-0.5 disabled:!shadow-none",
        shadow === "float" &&
          "shadow-[0px_0px_6px_1px_#a5a5a5] active:shadow-[0px_0px_4px_1px_#a5a5a5] dark:shadow-[0px_0px_6px_1px_#302d2d] dark:active:shadow-[0px_0px_4px_1px_#302d2d]",
        shadow === "neu" &&
          `shadow-[2px_2px_4px_#777777,_-2px_-2px_4px_#ffffff] active:shadow-[2px_2px_4px_#777777,_-2px_-2px_4px_#ffffff]
            dark:shadow-none`,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
