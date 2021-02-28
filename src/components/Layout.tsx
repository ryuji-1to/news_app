import { Box, Flex } from '@chakra-ui/react';
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
  <Flex height="100vh" overflow="hidden" py={5}>
    <Nav
      isSportsPage={isSportsPage}
      isHealthPage={isHealthPage}
      isGeneralPage={isGeneralPage}
      isSciencePage={isSciencePage}
      isTechnologyPage={isTechnologyPage}
      isEntertainmentPage={isEntertainmentPage}
    />
    <Box as="main">{children}</Box>
  </Flex>
);

export default Layout;
