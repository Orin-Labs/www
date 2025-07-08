import { useCallback } from "react";

import { HTMLMotionProps, motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import posthog from "posthog-js";
import { useNavigate } from "react-router-dom";

import { Odyssey } from "@blog/components";
import { FloatingNav, Footer } from "@components";
import { cn } from "@utils";

import { BlogPost, getReadingTime, POSTS } from "./data";

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
    navigate(post.slug);
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
      <div className="z-10 flex flex-col justify-between items-stretch gap-4 p-8 bg-[#0000008d] text-white h-full w-full">
        <div className="flex flex-col gap-2 items-start text-left">
          <h3 className="text-3xl md:text-4xl font-bold">{post.title}</h3>
          <p className="text-gray-200 text-md md:text-lg">{post.excerpt}</p>
          {post.subArticles?.length && (
            <p className="text-gray-200 text-sm md:text-md">
              {post.subArticles?.length} articles: {getReadingTime(post)}m of
              reading
            </p>
          )}
          <p className="text-gray-200 text-sm md:text-md">
            Posted on{" "}
            {post.date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="flex justify-end">
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

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navigation */}
      <FloatingNav isVisible={true} />

      {/* Main Content */}
      <div className="border-t border-gray-200 w-full pt-48">
        <main className="mx-auto flex flex-col gap-4 px-4 max-w-6xl">
          {/* Blog Header */}
          <motion.div
            className="text-left flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Orin's Blog
            </h1>
            <p className="text-2xl text-gray-600">
              Comprehensive guides and expert insights for parents navigating
              middle school academics.
            </p>
          </motion.div>

          <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
            <BlogCard post={POSTS[0]} className="col-span-6" />
            <div className="col-span-6 flex flex-col gap-4">
              <BlogCard post={POSTS[1]} />
              <BlogCard post={POSTS[2]} />
            </div>
          </div>

          <Odyssey bg="#00000080" />
        </main>

        <Footer className="bg-white" />
      </div>
    </div>
  );
}
