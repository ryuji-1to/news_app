import { Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

type Props = {
  isGeneralPage?: boolean;
  isSciencePage?: boolean;
  isSportsPage?: boolean;
  isHealthPage?: boolean;
  isTechnologyPage?: boolean;
  isEntertainmentPage?: boolean;
};

const Nav: React.VFC<Props> = ({
  isSportsPage,
  isSciencePage,
  isTechnologyPage,
  isEntertainmentPage,
  isHealthPage,
  isGeneralPage,
}) => {
  const info = [
    {
      href: '/',
      isWhere: isGeneralPage,
      LinkName: 'General',
    },
    {
      href: '/sports',
      isWhere: isSportsPage,
      LinkName: 'Sports',
    },
    {
      href: '/science',
      isWhere: isSciencePage,
      LinkName: 'Science',
    },
    {
      href: '/health',
      isWhere: isHealthPage,
      LinkName: 'Health',
    },
    {
      href: '/technology',
      isWhere: isTechnologyPage,
      LinkName: 'Technology',
    },
    {
      href: '/entertainment',
      isWhere: isEntertainmentPage,
      LinkName: 'Entertainment',
    },
  ];

  return (
    <Stack p={5} spacing={5}>
      {info.map(({ href, isWhere, LinkName }) => (
        <NextLink href={href} key={href}>
          <Link
            textAlign="center"
            color={isWhere ? 'blue.500' : 'black'}
            border={isWhere ? '1px solid' : '1px solid gray'}
            fontWeight={isWhere ? 'bold' : 'normal'}
            borderRadius={5}
            px={3}
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
