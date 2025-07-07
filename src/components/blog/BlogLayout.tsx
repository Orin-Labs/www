// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowLeftIcon,
  ArrowRight,
  Facebook,
  Linkedin,
  MessageCircle,
  Twitter,
} from 'lucide-react';
import posthog from 'posthog-js';
import {
  Navigation,
  Pagination,
} from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import {
  BLOG_POSTS,
  BlogPost,
} from '@/blog/blog-data';

import { cn } from '../../utils';
import { Footer } from '../Footer';
import Nav from '../Nav';

interface BlogLayoutProps {
  children: React.ReactNode;
  className?: string;
}

interface SocialShareButtonProps {
  platform: "twitter" | "facebook" | "linkedin" | "whatsapp";
  url: string;
  title: string;
  description: string;
  blogPostId: string;
}

function SocialShareButton({
  platform,
  url,
  title,
  description,
  blogPostId,
}: SocialShareButtonProps) {
  const handleShare = () => {
    // Track social share click
    posthog.capture("blog_social_share_clicked", {
      platform,
      blog_post_id: blogPostId,
      blog_post_title: title,
      page_path: window.location.pathname,
    });

    let shareUrl = "";
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&src=sdkpreparse&quote=${encodedTitle}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodedTitle} ${encodedUrl}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        break;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const icons = {
    twitter: <Twitter className="w-4 h-4" />,
    facebook: <Facebook className="w-4 h-4" />,
    linkedin: <Linkedin className="w-4 h-4" />,
    whatsapp: <MessageCircle className="w-4 h-4" />,
  };

  const colors = {
    twitter: "hover:bg-blue-500 hover:text-white",
    facebook: "hover:bg-blue-600 hover:text-white",
    linkedin: "hover:bg-blue-700 hover:text-white",
    whatsapp: "hover:bg-green-500 hover:text-white",
  };

  return (
    <button
      onClick={handleShare}
      className={cn(
        "p-2 rounded-full border border-gray-200 bg-white transition-colors duration-200",
        "hover:shadow-md hover:border-transparent",
        colors[platform]
      )}
      title={`Share on ${platform}`}
    >
      {icons[platform]}
    </button>
  );
}

interface BlogCarouselProps {
  currentBlogId: string;
  currentBlogTitle: string;
}

function BlogCarousel({ currentBlogId, currentBlogTitle }: BlogCarouselProps) {
  const otherBlogs = BLOG_POSTS.filter((post) => post.id !== currentBlogId);

  const handleBlogClick = (blog: BlogPost, index: number) => {
    posthog.capture("blog_carousel_post_clicked", {
      current_blog_id: currentBlogId,
      current_blog_title: currentBlogTitle,
      clicked_blog_id: blog.id,
      clicked_blog_title: blog.title,
      carousel_position: index,
    });

    window.location.href = `/blog/${blog.slug}`;
  };

  const handleSlideChange = (swiper: any) => {
    posthog.capture("blog_carousel_slide_changed", {
      current_blog_id: currentBlogId,
      current_blog_title: currentBlogTitle,
      new_position: swiper.activeIndex,
    });
  };

  const handleNavigation = (direction: "next" | "prev") => {
    posthog.capture(`blog_carousel_${direction}_clicked`, {
      current_blog_id: currentBlogId,
      current_blog_title: currentBlogTitle,
    });
  };

  if (otherBlogs.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 rounded-lg p-6 mt-12"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Read More from Orin's Blog
      </h3>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          onSlideChange={handleSlideChange}
          className="blog-carousel-swiper"
        >
          {otherBlogs.map((blog, index) => (
            <SwiperSlide key={blog.id}>
              <motion.div
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                onClick={() => handleBlogClick(blog, index)}
              >
                {/* Blog Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <time className="flex items-center gap-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                      </svg>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-gray-300">•</span>
                    <span>{blog.readingTime}</span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h4>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {blog.author.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600">
                        {blog.author}
                      </span>
                    </div>

                    <span className="text-blue-600 hover:text-blue-800 transition-colors font-medium flex items-center gap-1">
                      Read more
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        {otherBlogs.length > 1 && (
          <>
            <button
              className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:bg-gray-50 z-10"
              onClick={() => handleNavigation("prev")}
              aria-label="Previous blog post"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:bg-gray-50 z-10"
              onClick={() => handleNavigation("next")}
              aria-label="Next blog post"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
          </>
        )}

        {/* Custom Pagination */}
        {otherBlogs.length > 1 && (
          <div className="swiper-pagination-custom flex justify-center mt-4 gap-2"></div>
        )}
      </div>

      <style>{`
        .blog-carousel-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: background-color 0.3s ease;
        }
        .blog-carousel-swiper .swiper-pagination-bullet-active {
          background: #2563eb;
        }
      `}</style>
    </motion.div>
  );
}

export function BlogLayout({ children, className }: BlogLayoutProps) {
  const slug = window.location.pathname.split("/").pop();
  const entry = BLOG_POSTS.find((post) => post.slug === slug);
  console.log("entry", entry);

  // Track blog post view
  React.useEffect(() => {
    if (entry) {
      posthog.capture("blog_post_viewed", {
        blog_post_id: entry.id,
        blog_post_title: entry.title,
        blog_post_slug: entry.slug,
        blog_post_author: entry.author,
        blog_post_date: entry.date.toISOString(),
        blog_post_reading_time: entry.readingTime,
        page_path: window.location.pathname,
        referrer: document.referrer,
      });
    }
  }, [entry]);

  const shareUrl = window.location.href;
  const shareTitle = entry?.title || "Orin Blog Post";
  const shareDescription =
    entry?.excerpt ||
    "Helpful insights and resources for middle school students and parents.";

  return (
    <div
      className={cn("min-h-screen relative flex flex-col h-screen", className)}
    >
      <Nav className="bg-white" />

      <div className="flex-grow overflow-y-auto w-full border-t border-gray-200">
        <main className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-16 font-sans flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <button
              className={cn(
                "flex items-center gap-2 text-sm text-gray-500 transition-all duration-300",
                "hover:text-gray-700 hover:bg-gray-100 rounded-md p-2"
              )}
              onClick={() => {
                // Track back button click
                if (entry) {
                  posthog.capture("blog_post_back_clicked", {
                    blog_post_id: entry.id,
                    blog_post_title: entry.title,
                    blog_post_slug: entry.slug,
                  });
                }
                window.history.back();
              }}
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Blog
            </button>

            {entry && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="hidden md:block">
                  By <i>{entry.author}</i>
                </span>
                <span className="hidden md:block">•</span>

                <time dateTime={entry.date.toISOString()}>
                  {entry.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{entry.readingTime}</span>
              </div>
            )}
          </div>

          {/* Social Share Buttons */}
          {entry && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex justify-center gap-3 pb-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 mr-2">Share:</span>
                <SocialShareButton
                  platform="twitter"
                  url={shareUrl}
                  title={shareTitle}
                  description={shareDescription}
                  blogPostId={entry.id}
                />
                <SocialShareButton
                  platform="facebook"
                  url={shareUrl}
                  title={shareTitle}
                  description={shareDescription}
                  blogPostId={entry.id}
                />
                <SocialShareButton
                  platform="linkedin"
                  url={shareUrl}
                  title={shareTitle}
                  description={shareDescription}
                  blogPostId={entry.id}
                />
                <SocialShareButton
                  platform="whatsapp"
                  url={shareUrl}
                  title={shareTitle}
                  description={shareDescription}
                  blogPostId={entry.id}
                />
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-12"
          >
            {children}
          </motion.div>

          {/* Blog Carousel */}
          {entry && (
            <BlogCarousel
              currentBlogId={entry.id}
              currentBlogTitle={entry.title}
            />
          )}
        </main>

        <Footer className="bg-white" />
      </div>
    </div>
  );
}
