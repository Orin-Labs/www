import React from 'react';

import { ArrowRightIcon } from 'lucide-react';
import posthog from 'posthog-js';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/Button';
import { BackgroundGradient } from '@components/BackgroundGradient';
import { cn } from '@utils';

type AdProps = {
  title: string;
  description: string;
} & React.HTMLProps<HTMLDivElement>;

export const Ad = ({ title, description, className, ...props }: AdProps) => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    // Track CTA click
    posthog.capture("blog_cta_clicked", {
      cta_title: title,
      cta_description: description,
      page_path: window.location.pathname,
      blog_post_id: window.location.pathname.split("/").pop(),
    });

    // Navigate to signup page
    window.location.href = "https://portal.learnwithorin.com/signup";
  };

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
        <Button
          shadow="neu"
          bg="gray"
          className="gap-2 z-10"
          onClick={handleCTAClick}
        >
          Try for Free
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <BackgroundGradient speed={0.2} />
    </div>
  );
};
