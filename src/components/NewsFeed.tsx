import { Stack } from '@chakra-ui/react';
import React from 'react';
import { DATA } from 'types';

import NewsCard from './NewsCard';

type Props = {
  data: DATA;
};

const NewsFeed: React.FC<Props> = ({ data }) => (
  <Stack spacing={5} height="100%" overflow="auto" flex="1" px={5}>
    {data?.articles?.map((article) => (
      <NewsCard article={article} key={article.source.id} />
    ))}
  </Stack>
);

export default NewsFeed;
