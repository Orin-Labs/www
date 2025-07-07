import { HTMLProps } from 'react';

import { ArrowRightIcon } from 'lucide-react';
import posthog from 'posthog-js';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/Button';
import { cn } from '@/utils';

import { BackgroundGradient } from './BackgroundGradient';

type AdProps = {
  title: string;
  description: string;
} & HTMLProps<HTMLDivElement>;

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

    // Execute original navigation
    if (window.location.pathname === "/") {
      document.getElementById("cta-section")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/?scrollTo=cta-section");
    }
  };

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md py-8 md:py-4 px-4 relative overflow-hidden",
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
          Free 2 Week Trial
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <BackgroundGradient speed={0.2} />
    </div>
  );
};
