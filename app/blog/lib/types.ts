export interface BlogMeta {
  name: string;
  shortName: string;
  excerpt: string;
  keywords: string[];
  image?: string;
  id: string;
  date: Date;
  author: string;
  readingTime: number;
  slug: string;
  subArticles?: BlogMeta[];
  underConstruction?: boolean;
}

export interface BlogPost extends BlogMeta {
  content?: React.ReactNode;
}
