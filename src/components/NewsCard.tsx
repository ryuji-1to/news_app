import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { NEWS_DATA } from 'types';

type Props = {
  article: NEWS_DATA;
};

const NewsCard: React.FC<Props> = ({ article }) => (
  <Flex
    as="a"
    href={article.url}
    target="_brank"
    rel="noopener noreferrer"
    border="1px solid"
    borderColor="colorPrimary"
    width="80%"
    maxWidth="850px"
    minWidth="500px"
  >
    <Image src={article.urlToImage || '/noimage.jpg'} w="250px" mr={3} />
    <Flex direction="column" justify="space-around">
      <Text as="h4" fontWeight="bold" fontSize="lengthMd1">
        {article.title || 'タイトルなし'}
      </Text>
      <Text>{article.description}</Text>
    </Flex>
  </Flex>
);

export default NewsCard;
