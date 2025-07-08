import { HTMLMotionProps } from "framer-motion";

interface BlogSidebarProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export function BlogSidebar({ className, ...props }: BlogSidebarProps) {
  return null;
}
