// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import { useRouter } from 'next/router';
import { theme } from 'public/theme';
import { Provider } from 'react-redux';
import { store } from 'utils/redux/store';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ChakraProvider
      theme={router.pathname.startsWith('/login') ? undefined : theme}
    >
      <Provider store={store}>
        {router.pathname.startsWith('/login') ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Nav />
            <Component {...pageProps} />
            {/* <Footer /> */}
          </>
        )}
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
