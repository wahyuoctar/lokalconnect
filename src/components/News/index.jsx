import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
const News = ({ gambar, title, date }) => {
  return (
    <Box
      position="relative"
      height={['30vh', '40vh', '40vh', '80vh']}
      width={['100vw', '100vw', '100vw', '100vw']}
    >
      <Text
        top={['3', '5', '5', '5']}
        right={['5', '10', '10', '10']}
        position="absolute"
        color="white"
        fontSize="18px"
      >
        {date}
      </Text>
      <Image
        style={{ width: '100%', height: '100%' }}
        src={gambar}
        alt="photo"
      />
      <Text
        bottom="10px"
        left="30px"
        position="absolute"
        fontSize="18px"
        color="white"
      >
        {title}
      </Text>
    </Box>
  );
};
export default News;
