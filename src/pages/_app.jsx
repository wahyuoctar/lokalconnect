import { ThemeProvider } from '@mui/material';
import '../styles/globals.css';
import theme from 'theme';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
