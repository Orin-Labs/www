import React from 'react';

import {
  Facebook,
  Linkedin,
  MessageCircle,
  Twitter,
} from 'lucide-react';
import posthog from 'posthog-js';

import { cn } from '@utils';

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
        "p-2 rounded-full border  bg-white transition-colors duration-200",
        "hover:shadow-md hover:border-transparent",
        colors[platform]
      )}
      title={`Share on ${platform}`}
    >
      {icons[platform]}
    </button>
  );
}

interface SocialShareButtonsProps {
  url: string;
  title: string;
  description: string;
  blogPostId: string;
  className?: string;
}

export function SocialShareButtons({
  url,
  title,
  description,
  blogPostId,
  className,
}: SocialShareButtonsProps) {
  const platforms: Array<"twitter" | "facebook" | "linkedin" | "whatsapp"> = [
    "twitter",
    "facebook",
    "linkedin",
    "whatsapp",
  ];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {platforms.map((platform) => (
        <SocialShareButton
          key={platform}
          platform={platform}
          url={url}
          title={title}
          description={description}
          blogPostId={blogPostId}
        />
      ))}
    </div>
  );
}
