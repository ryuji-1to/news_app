export type NEWS_DATA = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type Data = {
  status: string;
  totalResults: number;
  articles: NEWS_DATA[];
};
