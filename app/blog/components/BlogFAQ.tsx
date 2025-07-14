import React from 'react';

import { IconName } from 'lucide-react/dynamic';

import { cn } from '@/utils';

import { FAQInteractive } from './FAQInteractive';

export interface FAQItem {
  question: string;
  answer: string;
  icon: IconName;
}

interface BlogFAQProps {
  title?: string;
  items: FAQItem[];
  description?: string;
  className?: string;
}

export function BlogFAQ({
  title = "Frequently Asked Questions",
  items,
  description,
  className,
}: BlogFAQProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        {description && (
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      <FAQInteractive items={items} />
    </div>
  );
}
