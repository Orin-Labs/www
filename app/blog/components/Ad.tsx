import React from 'react';

import { Button } from 'app/components/Button';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

import { BackgroundGradient } from '@/components/BackgroundGradient';
import { cn } from '@/utils';

type AdProps = {
  title: string;
  description: string;
} & React.HTMLProps<HTMLDivElement>;

export const Ad = ({ title, description, className, ...props }: AdProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md py-8 lg:py-16 px-4 relative overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className="z-10 text-center flex flex-col gap-4 justify-center items-center text-white"
        style={{
          fontFamily: "Gowun Dodum",
        }}
      >
        <h3 className="text-4xl font-bold z-10">{title}</h3>
        <p className="text-xl z-10">{description}</p>
        <Link href="/signup">
          <Button shadow="neu" bg="gray" className="gap-2 z-10">
            Try for Free
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <BackgroundGradient speed={0.2} />
    </div>
  );
};
