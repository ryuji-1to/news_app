import { extendTheme } from '@chakra-ui/react';
import { Theme } from 'types';

export const theme = extendTheme({
  colors: {
    colorPrimary: '#8739F9',
    colorAccent: '#37B9F1',
    colorGrey: '#F2F5F5',
    colorDisabled: '#E1DFE9',
  },
  fontSizes: {
    lengthSm1: '0.25rem',
    lengthSm2: '0.375rem',
    lengthSm3: '0.5rem',
    lengthMd1: '1rem',
    lengthMd2: '1.25rem',
    lengthMd3: '1.5rem',
    lengthLg1: '2rem',
    lengthLg2: '3rem',
    lengthLg3: '4rem',
  },
}) as Theme;
