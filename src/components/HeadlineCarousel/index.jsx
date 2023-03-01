import Image from 'next/image';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { data } from 'utils/helper';

const HeadlineCarousel = () => {
  const [index, setIndex] = useState(0);
  const autoScroll = true;
  let slideInterval;
  const nextSlide = () => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    setIndex(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      slideInterval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(slideInterval);
  }, [index]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
      >
        <Box
          height={['30vh', '40vh', '50vh', '60vh', '70vh', '85vh']}
          width="100vw"
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            src={data[index].image}
            alt="photo"
          />
        </Box>

        {/* Untuk dots */}
        <Flex>
          {data.map((val, idx) => {
            return (
              <Box
                key={idx}
                width={
                  idx == index
                    ? ['30px', '30px', '30px', '50px']
                    : ['5px', '5px', '5px', '10px']
                }
                height={['5px', '5px', '5px', '10px']}
                backgroundColor="white"
                border="0.5px white"
                marginY="2"
                marginX="0.5"
                borderRadius="full"
                transition="300ms"
                onClick={() => setIndex(idx)}
                _hover={{
                  cursor: 'pointer',
                  backgroundColor: 'gray',
                }}
              />
            );
          })}
        </Flex>
      </Box>
      <Box width="50vw">
        <Text
          fontSize={['md', 'lg', 'xl', '2xl', '2xl', '6xl']}
          fontWeight="semibold"
          color="white"
          fontFamily="sans-serif"
        >
          {data[index]?.subTitle}
        </Text>
        <Text
          fontSize={['2xs', '2xs', 'xs', 'md', 'md', '3xl']}
          fontWeight="semibold"
          color="white"
          fontFamily="sans-serif"
        >
          {data[index]?.title}
        </Text>
      </Box>
    </>
  );
};

export default HeadlineCarousel;
