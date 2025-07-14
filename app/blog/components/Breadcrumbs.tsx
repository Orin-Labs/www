import React from 'react';

import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/utils';

import { BLOG_REGISTRY } from '../lib/blog-registry';

interface BreadcrumbsProps {
  currentSlug: string;
  className?: string;
}

export function Breadcrumbs({ currentSlug, className }: BreadcrumbsProps) {
  // Find the current post by slug
  const findPostBySlug = (slug: string) => {
    for (const pillar of BLOG_REGISTRY) {
      if (pillar.slug === slug) {
        return pillar;
      }
      if (pillar.subArticles) {
        for (const subArticle of pillar.subArticles) {
          if (subArticle.slug === slug) {
            return subArticle;
          }
        }
      }
    }
    return null;
  };

  const currentPost = findPostBySlug(currentSlug);

  if (!currentPost) {
    return null;
  }

  // Find if this is a sub-article and get its parent
  let parentPillar = null;
  let isSubArticle = false;

  for (const pillar of BLOG_REGISTRY) {
    if (pillar.subArticles?.some((sub) => sub.slug === currentSlug)) {
      parentPillar = pillar;
      isSubArticle = true;
      break;
    }
  }

  const breadcrumbItems = [{ label: "Blog", href: "/blog" }];

  if (isSubArticle && parentPillar) {
    // This is a sub-article, show: Blog > Parent Pillar > Current Article
    breadcrumbItems.push({
      label: parentPillar.shortName,
      href: `/blog/${parentPillar.slug}`,
    });
    breadcrumbItems.push({
      label: currentPost.shortName,
      href: `/blog/${currentPost.slug}`,
    });
  } else {
    // This is a pillar post, show: Blog > Current Pillar
    breadcrumbItems.push({
      label: currentPost.shortName,
      href: `/blog/${currentPost.slug}`,
    });
  }

  return (
    <nav
      className={cn(
        "flex items-center space-x-2 text-sm text-gray-500",
        className
      )}
    >
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.href}>
          {index === breadcrumbItems.length - 1 ? (
            // Current page - not a link
            <span className="font-medium text-gray-700">{item.label}</span>
          ) : (
            // Link to parent pages
            <Link
              href={item.href}
              className="hover:text-gray-700 transition-colors"
            >
              {item.label}
            </Link>
          )}
          {index < breadcrumbItems.length - 1 && (
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
