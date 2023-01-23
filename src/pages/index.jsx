import Image from 'next/image';
import compass from '../assets/images/compass.jpg';
import megawati from '../assets/images/megawati.jpg';
import jokowi from '../assets/images/jokowi.jpg';
import { Typography, Box, Container } from '@mui/material';
import News from 'components/News';

const Home = () => {
  const data = [
    {
      title: `Rilisan Terbaru Sepatu Compass \nEdisi Spesial Tahun Baru Cina`,
      date: '08.01',
      image: compass,
    },
    {
      title: 'PDIP, Golkar, PPP Membuat Koalisi\ndan Mencalonkan Donald Trump',
      date: '08.01',
      image: megawati,
    },
    {
      title: 'Presiden Ucapkan Selamat,\nAtas Dilantiknya Ketua UI',
      date: '08.01',
      image: jokowi,
    },
  ];

  const renderNews = () => {
    return data.map((val) => {
      return <News date={val.date} image={val.image} title={val.title} />;
    });
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      marginBottom="100px"
    >
      {data.map((val) => {
        return (
          <News
            gambar={val.image}
            date={val.date}
            title={val.title}
            key="key"
          />
        );
      })}
    </Box>
  );
};

export default Home;
