// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import theme from './theme';

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
