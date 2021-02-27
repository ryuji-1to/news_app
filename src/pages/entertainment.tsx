import { Box } from '@chakra-ui/react';
import { fetchData } from 'api';
import { GetStaticProps } from 'next';
import React from 'react';
import { Data } from 'types';

import NewsFeed from '../components/NewsFeed';

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData('entertainment');

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

const Sports: React.FC<Props> = ({ data }) => (
  <Box as="main" height="100vh">
    <NewsFeed data={data} />
  </Box>
);

export default Sports;
