import { Heading, Stack } from '@chakra-ui/react';
import { createPageInfo } from 'api';
import React from 'react';

import DarkModeSwitch from './DarkModeSwitch';
import LinkMenu from './LinkMenu';
import SelectMenu from './SelectMenu';

type Props = {
  isGeneralPage?: boolean;
  isSciencePage?: boolean;
  isSportsPage?: boolean;
  isHealthPage?: boolean;
  isTechnologyPage?: boolean;
  isEntertainmentPage?: boolean;
};

const Nav: React.VFC<Props> = ({
  isGeneralPage,
  isSportsPage,
  isSciencePage,
  isHealthPage,
  isTechnologyPage,
  isEntertainmentPage,
}) => {
  const pageInfo = createPageInfo({
    isGeneralPage,
    isSportsPage,
    isSciencePage,
    isHealthPage,
    isTechnologyPage,
    isEntertainmentPage,
  });

  return (
    <Stack
      as="nav"
      px={5}
      py={[5, 0]}
      spacing={[0, 5]}
      direction={['row', 'column']}
      justify={['space-between', 'start']}
    >
      <Heading fontSize="28px" d={['none', 'block']}>
        NEWS APP
      </Heading>
      <DarkModeSwitch />
      <SelectMenu
        isSportsPage={isSportsPage}
        isHealthPage={isHealthPage}
        isGeneralPage={isGeneralPage}
        isSciencePage={isSciencePage}
        isTechnologyPage={isTechnologyPage}
        isEntertainmentPage={isEntertainmentPage}
      />
      <LinkMenu pageInfo={pageInfo} />
    </Stack>
  );
};
export default Nav;
