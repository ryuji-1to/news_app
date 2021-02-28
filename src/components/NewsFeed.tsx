import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Data } from 'types';

import NewsCard from './NewsCard';

type Props = {
  data: Data;
};

const NewsFeed: React.FC<Props> = ({ data }) => (
  <Stack spacing={5} height="100%" overflow="auto">
    {data?.articles?.map((article) => (
      <NewsCard article={article} key={article.source.id} />
    ))}
  </Stack>
);

export default NewsFeed;
