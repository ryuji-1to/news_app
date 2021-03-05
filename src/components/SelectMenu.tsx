import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { createPageInfo } from 'api';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

type Props = {
  isGeneralPage?: boolean;
  isSciencePage?: boolean;
  isSportsPage?: boolean;
  isHealthPage?: boolean;
  isTechnologyPage?: boolean;
  isEntertainmentPage?: boolean;
};

const SelectMenu: React.VFC<Props> = ({
  isGeneralPage,
  isSportsPage,
  isSciencePage,
  isHealthPage,
  isTechnologyPage,
  isEntertainmentPage,
}) => {
  const router = useRouter();
  const pageInfo = createPageInfo({
    isSportsPage,
    isGeneralPage,
    isTechnologyPage,
    isSciencePage,
    isEntertainmentPage,
    isHealthPage,
  });

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        border="1px solid"
        color="blue.400"
        borderRadius={5}
        w="150px"
        py={1}
        d={['block', 'block', 'none']}
      >
        {pageInfo.map(({ isWhere, LinkName }) => isWhere && LinkName)}
      </MenuButton>
      <MenuList>
        {pageInfo.map(({ href, LinkName }) => (
          <MenuItem key={href} onClick={() => router.push(href)}>
            {LinkName}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SelectMenu;
