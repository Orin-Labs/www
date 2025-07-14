import {
  BlogMeta,
  OrinMetadata,
} from './types';

export function asMetadata(meta: BlogMeta): OrinMetadata {
  return {
    ...meta,
    title: "Orin's Blog - " + meta.title,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: meta.image,
      type: "article",
      publishedTime: meta.date.toISOString(),
    },
  };
}
