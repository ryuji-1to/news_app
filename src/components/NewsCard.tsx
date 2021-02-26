import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { NEWS_DATA } from 'types';

type Props = {
  article: NEWS_DATA;
};

const NewsCard: React.FC<Props> = ({ article }) => (
  <Flex as="a" href={article.url}>
    <Image src={article.urlToImage || '/noimage.jpg'} w="300px" mr={3} />
    <Flex direction="column" justify="space-around">
      <Text as="h4" fontWeight="bold" fontSize="18px">
        {article.title || 'タイトルなし'}
      </Text>
      <Text>{article.description}</Text>
    </Flex>
  </Flex>
);

export default NewsCard;
