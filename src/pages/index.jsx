import Image from 'next/image';
import compass from '../assets/images/compass.jpg';
import megawati from '../assets/images/megawati.jpg';
import jokowi from '../assets/images/jokowi.jpg';
import News from 'components/News';
import { Box, Container } from '@chakra-ui/react';

const Home = () => {
  const data = [
    {
      title: `Rilisan Terbaru Sepatu Compass \nEdisi Spesial Tahun Baru Cina`,
      date: '08.01',
      image: compass,
      url: '../assets/images/compass.jpg',
    },
    {
      title: 'PDIP, Golkar, PPP Membuat Koalisi\ndan Mencalonkan Donald Trump',
      date: '08.01',
      image: megawati,
      url: '../assets/images/megawati.jpg',
    },
    {
      title: 'Presiden Ucapkan Selamat,\nAtas Dilantiknya Ketua UI',
      date: '08.01',
      image: jokowi,
      url: '../assets/images/jokowi.jpg',
    },
  ];

  return (
    <Box
      paddingTop={['50px']}
      paddingBottom={['100px', '100px', '100px', '100px']}
    >
      {data.map((val) => {
        return (
          <News
            gambar={val.image}
            date={val.date}
            title={val.title}
            key={val.title}
            url={val.url}
          />
        );
      })}
    </Box>
  );
};

export default Home;
