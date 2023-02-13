// pages/_app.js
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Footer from 'components/Footer';
import Nav from 'components/Nav';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
      },
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
