import { HTMLProps } from 'react';

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

export default function Nav({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  const navigate = useNavigate();

  return (
    <header
      className={cn("w-full flex items-center justify-between p-4", className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <Link to="/" className="hover:no-underline">
          <h1 className="block md:hidden text-2xl font-bold text-gray-800">
            Orin
          </h1>
          <h1 className="hidden md:block text-2xl font-bold text-gray-800">
            Learn with Orin
          </h1>
        </Link>
      </div>
      <nav>
        <div className="flex items-center gap-4">
          {NAV_ITEMS.map((item) => {
            const isInternalLink =
              item.href.startsWith("/") && !item.href.includes("#");

            const className = cn(
              "p-2 rounded-lg hover:underline text-gray-700",
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
            className="gap-2 relative overflow-hidden"
            onClick={() => navigate("/signup")}
          >
            Try for Free
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
