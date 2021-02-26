import { Stack } from '@chakra-ui/react';
import { fetchData } from 'api';
import { GetStaticProps } from 'next';
import React from 'react';
import { NEWS_DATA } from 'types';

import NewsCard from '../components/NewsCard';

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

type Data = {
  status: string;
  totalResults: number;
  articles: NEWS_DATA[];
};

type Props = {
  data: Data;
};

const About: React.FC<Props> = ({ data }) => (
  <Stack as="main" spacing={5}>
    {data?.articles.map((article) => (
      <NewsCard article={article} />
    ))}
  </Stack>
);
export default About;
