import { Metadata } from 'next';

export type BlogMeta = {
  title: string;
  description: string;
  date: Date;
  readingTime: number;
  image: string;
  keywords: string[];
  authors: { name: string }[];
};

export type OrinMetadata = BlogMeta & {
  openGraph: Metadata["openGraph"] & {
    publishedTime: string;
  };
};
