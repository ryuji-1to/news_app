import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import Nav from './Nav';

type Props = {
  children: ReactNode;
  isGeneralPage?: boolean;
  isSciencePage?: boolean;
  isSportsPage?: boolean;
  isHealthPage?: boolean;
  isTechnologyPage?: boolean;
  isEntertainmentPage?: boolean;
};

const Layout: React.VFC<Props> = ({
  children,
  isSportsPage,
  isSciencePage,
  isTechnologyPage,
  isEntertainmentPage,
  isHealthPage,
  isGeneralPage,
}) => (
  <Flex h="100vh" w="100vw" maxW="1000px" overflow="hidden" mx="auto" p={5}>
    <Nav
      isSportsPage={isSportsPage}
      isHealthPage={isHealthPage}
      isGeneralPage={isGeneralPage}
      isSciencePage={isSciencePage}
      isTechnologyPage={isTechnologyPage}
      isEntertainmentPage={isEntertainmentPage}
    />
    {children}
  </Flex>
);

export default Layout;
