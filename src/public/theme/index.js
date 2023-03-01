import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
  // components: {
  //   Drawer: {
  //     parts: ['dialog', 'header', 'body'],
  //     variant: {
  //       secondary: {
  //         dialog: {
  //           maxW: '200px',
  //           height: '100px',
  //         },
  //         body: {
  //           width: '200px',
  //           height: '100px',
  //         },
  //       },
  //     },
  //   },
  // },
});
