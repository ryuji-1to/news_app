import { NEWS_DATA } from 'types';

export const NEWS_API_KEY = 'a862163d55d440d4adc797d8c19c68f7';

export const generateNewsUrl = (category: string): string =>
  `https://newsapi.org/v2/top-headlines?country=jp&category=${category}&pageSize=100&apiKey=${NEWS_API_KEY}`;

export const fetchData = async (
  category = 'business',
): Promise<NEWS_DATA[]> => {
  try {
    const res = await fetch(generateNewsUrl(category));
    const data = (await res.json()) as NEWS_DATA[];

    return data;
  } catch (error) {
    throw new Error();
  }
};
