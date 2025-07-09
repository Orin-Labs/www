import { useCallback } from 'react';

import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import posthog from 'posthog-js';
import { useNavigate } from 'react-router-dom';

import {
  BlogPost,
  getReadingTime,
} from '@blog/data';
import { cn } from '@utils';

interface BlogCardProps extends HTMLMotionProps<"button"> {
  post: BlogPost;
}

export function BlogCard({ post, className, ...props }: BlogCardProps) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    // Track pillar click
    posthog.capture("blog_post_clicked", {
      pillar_id: post.id,
      pillar_title: post.title,
      pillar_slug: post.slug,
      page_path: window.location.pathname,
    });
    navigate(`/blog/${post.slug}`);
  }, [post, navigate]);

  return (
    <motion.button
      className={cn(
        "min-h-72 relative rounded-lg border border-gray-200 overflow-hidden",
        className
      )}
      onClick={handleClick}
      initial={{
        scale: 1,
        backgroundPosition: "50% 50%",
      }}
      animate={{
        backgroundPosition: "50% 50%",
      }}
      whileHover={{
        backgroundPosition: "55% 55%",
        scale: 1.005,
        transition: {
          duration: 0.1,
        },
      }}
      whileTap={{
        scale: 0.99,
        transition: {
          duration: 0.1,
        },
      }}
      style={{
        backgroundImage: `url(${post.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      {...props}
    >
      <div
        className={cn(
          "z-10 flex flex-col justify-between items-stretch gap-16 p-8 bg-[#0000008d]",
          "text-white h-full w-full min-h-[400px]"
        )}
      >
        <div className="flex flex-col gap-2 items-start text-left">
          <h3 className="text-3xl md:text-4xl font-bold">{post.title}</h3>
          <p className="text-gray-200 text-md">{post.excerpt}</p>
        </div>

        {/* button to read more */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col items-start">
            <p className="text-gray-200 text-sm md:text-md">
              {post.subArticles
                ? `${post.subArticles.length} articles`
                : `${getReadingTime(post)} min read`}
            </p>
            <p className="text-gray-200 text-sm md:text-md">
              {post.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div
            className={cn(
              "bg-white text-black px-4 py-2 rounded-md flex items-center gap-2"
            )}
          >
            Read More
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
