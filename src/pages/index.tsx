import { Box } from '@chakra-ui/react';
import { fetchData } from 'api';
import { GetStaticProps } from 'next';
import React from 'react';

import NewsFeed from '../components/NewsFeed';
import { Data } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

type Props = {
  data: Data;
};

const About: React.FC<Props> = ({ data }) => (
  <Box as="main" height="100vh">
    <NewsFeed data={data} />
  </Box>
);

export default About;
