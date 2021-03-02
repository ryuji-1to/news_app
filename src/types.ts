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

export type Theme = {
  colors: {
    colorPrimary: string;
    colorAccent: string;
    colorGrey: string;
    colorDisabled: string;
  };
  sizes: {
    lengthSm1: string;
    lengthSm2: string;
    lengthSm3: string;
    lengthMd1: string;
    lengthMd2: string;
    lengthMd3: string;
    lengthLg1: string;
    lengthLg2: string;
    lengthLg3: string;
  };
};

export type Page = {
  isGeneralPage: boolean | undefined;
  isSportsPage: boolean | undefined;
  isSciencePage: boolean | undefined;
  isHealthPage: boolean | undefined;
  isTechnologyPage: boolean | undefined;
  isEntertainmentPage: boolean | undefined;
};

export type PageInfo = {
  href: string;
  isWhere: boolean | undefined;
  LinkName: string;
};
