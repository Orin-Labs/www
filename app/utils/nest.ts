import { getFullSlug } from '@/blog/lib/blog-registry';

export function flattenItems<T extends { subArticles?: T[] }>(items: T[]): T[] {
  const flattened: T[] = [];

  for (const post of items) {
    flattened.push(post);
    if (post.subArticles) {
      flattened.push(...flattenItems<T>(post.subArticles));
    }
  }

  return flattened;
}

export function getBySlug<T extends { slug: string; subArticles?: T[] }>(
  slug: string,
  items: T[]
): T | null {
  for (const item of items) {
    if (item.slug === slug || getFullSlug(item.slug) === slug) {
      return item;
    }
    if (item.subArticles) {
      const found = getBySlug(slug, item.subArticles);
      if (found) {
        return found;
      }
    }
  }
  return null;
}
