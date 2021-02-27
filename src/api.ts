import { NEWS_DATA } from 'types';

export const generateNewsUrl = (category: string): string =>
  `https://newsapi.org/v2/top-headlines?country=jp&category=${category}&pageSize=100&apiKey=${
    process.env.NEXT_PUBLIC_NEWS_API_KEY as string
  }`;

export const fetchData = async (category = 'general'): Promise<NEWS_DATA[]> => {
  try {
    const res = await fetch(generateNewsUrl(category));
    const data = (await res.json()) as NEWS_DATA[];

    return data;
  } catch (error) {
    throw new Error();
  }
};
