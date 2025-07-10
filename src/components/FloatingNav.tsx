import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import { Button } from '../Button';
import { cn } from '../utils';

type NavItem = {
  label: string;
  href: string;
  breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
  onClick?: () => void;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Testimonials",
    href: "/#testimonials",
    breakpoint: "sm",
    onClick: () => {
      const element = document.getElementById("testimonials");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        // If not on the home page, navigate to the home page first
        window.location.href = "/?scrollTo=testimonials";
      }
    },
  },
  {
    label: "Pricing",
    href: "/#pricing",
    breakpoint: "sm",
    onClick: () => {
      const element = document.getElementById("pricing");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        // If not on the home page, navigate to the home page first
        window.location.href = "/?scrollTo=pricing";
      }
    },
  },
  {
    label: "Blog",
    href: "/blog",
    breakpoint: "md",
  },
];

interface FloatingNavProps {
  isVisible: boolean;
  className?: string;
}

export default function FloatingNav({
  isVisible,
  className,
}: FloatingNavProps) {
  const navigate = useNavigate();

  return (
    <motion.header
      className={cn(
        "fixed top-4 left-4 md:left-8 lg:left-12 right-4 md:right-8 lg:right-12 z-50 rounded-lg flex items-center justify-between px-4 py-3",
        "bg-[#ffffffdd] backdrop-blur-md border  shadow-sm",
        className
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center gap-2">
        <Link to="/" className="hover:no-underline">
          <h1 className="text-xl font-bold text-gray-800">Learn with Orin</h1>
        </Link>
      </div>
      <nav>
        <div className="flex items-center gap-3">
          {NAV_ITEMS.map((item) => {
            const isInternalLink =
              item.href.startsWith("/") && !item.href.includes("#");

            const className = cn(
              "px-3 py-2 rounded-lg hover:underline text-gray-700",
              item.breakpoint === "sm" && "hidden sm:block",
              item.breakpoint === "md" && "hidden md:block",
              item.breakpoint === "lg" && "hidden lg:block"
            );

            if (isInternalLink) {
              return (
                <Link key={item.label} to={item.href} className={className}>
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className={className}
              >
                {item.label}
              </a>
            );
          })}

          <Button
            shadow="neu"
            bg="gray"
            className="gap-2 relative overflow-hidden text-sm px-4 py-2"
            onClick={() => {
              if (window.location.pathname === "/") {
                document.getElementById("cta-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              } else {
                navigate("/?scrollTo=cta-section");
              }
            }}
          >
            Free 2 week trial
            <ArrowRightIcon className="w-3 h-3" />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
