import { Link, Stack } from '@chakra-ui/react';
import { createPageInfo } from 'api';
import NextLink from 'next/link';
import React from 'react';

import DarkModeSwitch from './DarkModeSwitch';
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
    <Stack as="nav" px={5} spacing={5}>
      <DarkModeSwitch />
      <SelectMenu
        isSportsPage={isSportsPage}
        isHealthPage={isHealthPage}
        isGeneralPage={isGeneralPage}
        isSciencePage={isSciencePage}
        isTechnologyPage={isTechnologyPage}
        isEntertainmentPage={isEntertainmentPage}
      />
      {pageInfo.map(({ href, isWhere, LinkName }) => (
        <NextLink href={href} key={href}>
          <Link
            textAlign="center"
            color={isWhere ? 'blue.500' : undefined}
            border={isWhere ? '1px solid' : '1px solid gray'}
            fontWeight={isWhere ? 'bold' : 'normal'}
            borderRadius={5}
            p={3}
            py={1}
          >
            {LinkName}
          </Link>
        </NextLink>
      ))}
    </Stack>
  );
};
export default Nav;
