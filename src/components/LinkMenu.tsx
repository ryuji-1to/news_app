import { Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { PageInfo } from 'types';

type Props = {
  pageInfo: PageInfo[];
};

const LinkMenu: React.FC<Props> = ({ pageInfo }) => (
  <Stack spacing={5} d={['none', 'none', 'flex']}>
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
export default LinkMenu;
