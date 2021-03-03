import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, Switch, useColorMode } from '@chakra-ui/react';
import React from 'react';

const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center" display={['block', 'none', 'block']}>
      <Switch size="lg" isChecked={colorMode === 'dark'} onChange={toggleColorMode} mr={3} />
      {colorMode === 'dark' ? (
        <MoonIcon onClick={toggleColorMode} />
      ) : (
        <SunIcon onClick={toggleColorMode} />
      )}
    </Flex>
  );
};
export default DarkModeSwitch;
