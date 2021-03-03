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
    key={article.source.id}
    target="_brank"
    rel="noopener noreferrer"
    border="1px solid"
    borderColor="colorPrimary"
    borderRadius={10}
    h="200px"
    _last={{ mb: 5 }}
  >
    <Image
      src={article.urlToImage || '/noimage.jpg'}
      borderRight="1px solid lightgray"
      borderLeftRadius={9}
      objectFit="cover"
      w="250px"
      mr={3}
    />
    <Flex direction="column" p={2} h="100px" overflow="hidden">
      <Text as="h4" fontWeight="bold" fontSize={['lengthMd1', 'lengthMd2', 'lengthMd1']}>
        {article.title || 'タイトルなし'}
      </Text>
      <Text>{article.description}</Text>
    </Flex>
  </Flex>
);

export default NewsCard;
