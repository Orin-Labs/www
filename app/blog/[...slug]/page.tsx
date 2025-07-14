import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogLayout } from '../components/BlogLayout';
import {
  BLOG_REGISTRY,
  getBlogBySlug,
} from '../lib/blog-registry';

interface BlogPostPageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  // Generate static params for all blog posts
  const allPosts = [];

  for (const pillar of BLOG_REGISTRY) {
    allPosts.push({ slug: [pillar.slug] });

    if (pillar.subArticles) {
      for (const subArticle of pillar.subArticles) {
        allPosts.push({ slug: [subArticle.slug] });
      }
    }
  }

  return allPosts;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const awaitedParams = await params;
  const slug = awaitedParams.slug.join("/");
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.name,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.name,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
      type: "article",
      publishedTime: post.date.toISOString(),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const awaitedParams = await params;
  const slug = awaitedParams.slug.join("/");
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogLayout blogMeta={post}>
      {/* Placeholder content - will be replaced with actual blog content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">{post.excerpt}</p>

        {post.underConstruction ? (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="text-blue-900 font-semibold mb-2">Coming Soon</h3>
            <p className="text-blue-800">
              This comprehensive guide is being developed and will be available
              soon. It will include detailed information, practical tips, and
              actionable strategies for {post.name.toLowerCase()}.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            <p className="text-gray-700">
              This is a placeholder for the blog post content. In a real
              implementation, you would either:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Import the actual blog post component from your existing
                components
              </li>
              <li>Use a content management system or markdown files</li>
              <li>Store the content in a database</li>
            </ul>
            <p className="text-gray-700">
              The metadata, layout, and routing are all set up correctly for
              Next.js.
            </p>
          </div>
        )}
      </div>
    </BlogLayout>
  );
}
