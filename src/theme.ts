import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
      },
    }),
  },
  colors: {
    bg: {
      light: 'gray.50',
      dark: 'gray.900',
    },
    header: {
      light: 'white',
      dark: 'gray.800',
    },
    border: {
      light: 'gray.200',
      dark: 'gray.600',
    },
  },
});

export default theme;
