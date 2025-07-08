import {
  HTMLProps,
  useEffect,
  useState,
} from 'react';

import { cn } from '../utils';

export function Footer({ className, ...props }: HTMLProps<HTMLDivElement>) {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show footer when scrolled to bottom (within 50px threshold)
      setIsAtBottom(documentHeight - scrollTop - windowHeight < 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isAtBottom) {
    return null;
  }

  return (
    <footer
      className={cn("w-full bg-gray-50 border-t border-gray-100", className)}
      {...props}
    >
      <p className="text-center text-gray-500 text-sm py-2">
        &copy; {new Date().getFullYear()} Learn with Orin. All rights reserved.
      </p>
    </footer>
  );
}
