import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        aria-label="Toggle Dark Switch"
        onClick={toggleColorMode}
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      />
    </>
  );
};
export default DarkModeSwitch;
