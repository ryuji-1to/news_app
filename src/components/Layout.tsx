import { Flex } from '@chakra-ui/react';
import React from 'react';
import { DATA } from 'types';

import Nav from './Nav';
import NewsFeed from './NewsFeed';

type Props = {
  data: DATA;
  isGeneralPage?: boolean;
  isSciencePage?: boolean;
  isSportsPage?: boolean;
  isHealthPage?: boolean;
  isTechnologyPage?: boolean;
  isEntertainmentPage?: boolean;
};

const Layout: React.VFC<Props> = ({
  data,
  isSportsPage,
  isSciencePage,
  isTechnologyPage,
  isEntertainmentPage,
  isHealthPage,
  isGeneralPage,
}) => (
  <Flex
    direction={['column', 'row']}
    h="100vh"
    w="100vw"
    maxW="1000px"
    overflow="hidden"
    mx="auto"
    pt={[0, 5]}
  >
    <Nav
      isSportsPage={isSportsPage}
      isHealthPage={isHealthPage}
      isGeneralPage={isGeneralPage}
      isSciencePage={isSciencePage}
      isTechnologyPage={isTechnologyPage}
      isEntertainmentPage={isEntertainmentPage}
    />
    <NewsFeed data={data} />
  </Flex>
);

export default Layout;
