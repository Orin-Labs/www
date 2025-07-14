import React from 'react';

import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils';

interface BreadcrumbsProps {
  className?: string;
}

export function Breadcrumbs({ className }: BreadcrumbsProps) {
  const pathname = usePathname();
  const breadcrumbItems: string[] = pathname
    .split("/")
    .filter(Boolean)
    .map((item) => item.replace(/-/g, " "))
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1));

  return (
    <nav
      className={cn(
        "flex items-center space-x-2 text-sm text-gray-500",
        className
      )}
    >
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item}>
          {index === breadcrumbItems.length - 1 ? (
            // Current page - not a link
            <span className="font-medium text-gray-700">{item}</span>
          ) : (
            // Link to parent pages
            <Link
              href={`/${item}`}
              className="hover:text-gray-700 transition-colors"
            >
              {item}
            </Link>
          )}
          {index < breadcrumbItems.length - 1 && (
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
