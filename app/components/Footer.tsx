import { HTMLProps } from 'react';

import { cn } from '../utils';

export function Footer({ className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <footer
      className={cn("w-full bg-gray-50 border-t  ", className)}
      {...props}
    >
      <p className="text-center text-gray-500 text-sm py-2">
        &copy; {new Date().getFullYear()} Learn with Orin. All rights reserved.
      </p>
    </footer>
  );
}
