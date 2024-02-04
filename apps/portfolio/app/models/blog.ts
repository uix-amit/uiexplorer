export interface Blog {
  __typename: string;
  author: string;
  createdAt: string;
  id: string;
  likes: number;
  slug: string;
  subtitle: string;
  tags: string[];
  title: string;
  updatedAt: string;
  bannerImage: BannerImage;
  content: Content;
}

export interface BannerImage {
  __typename: string;
  url: string;
}

export interface Content {
  __typename: string;
  html: string;
}
