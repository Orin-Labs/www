"use client";

import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';

import { cn } from '@/utils';

export type ButtonProps = HTMLMotionProps<"button"> & {
  shadow?: "float" | "neu";
  bg?: "gray" | "transparent" | "white";
};

export function Button({
  children,
  className,
  disabled,
  shadow = "float",
  bg = "gray",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={cn(
        "px-3 py-2 rounded-lg flex items-center justify-center",
        bg === "gray" && "bg-gray-800 text-white hover:bg-gray-900",
        bg === "transparent" && "bg-transparent",
        bg === "white" && "bg-white text-gray-900",
        "disabled:cursor-not-allowed transition-all duration-50 active:translate-y-0.5 disabled:!shadow-none",
        shadow === "float" &&
          "shadow-[0px_0px_6px_1px_#a5a5a5] active:shadow-[0px_0px_4px_1px_#a5a5a5]",
        shadow === "neu" &&
          `shadow-[2px_2px_4px_#00000044,_-2px_-2px_4px_#ffffff99] active:shadow-[2px_2px_1px_#00000022,_-2px_-2px_1px_#ffffff44]`,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
