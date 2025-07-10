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
  return items.find((item) => item.slug === slug) || null;
}
