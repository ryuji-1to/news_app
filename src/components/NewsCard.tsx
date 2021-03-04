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
    h="100%"
    border="1px solid"
    borderColor="colorPrimary"
    borderRadius={10}
    _last={{ mb: 5 }}
  >
    <Image
      src={article.urlToImage}
      fallbackSrc="/noimage.jpg"
      borderRight="1px solid lightgray"
      borderLeftRadius={9}
      boxSize={['120px', '200px']}
      objectFit="cover"
      mr={3}
    />
    <Flex direction="column" p={2} h="100px" overflow="auto">
      <Text as="h4" fontWeight="bold" fontSize={['16px', 'lengthMd1']}>
        {article.title || 'タイトルなし'}
      </Text>
      <Text d={['none', 'block']}>{article.description}</Text>
    </Flex>
  </Flex>
);

export default NewsCard;
