import compass from '../public/images/compass.jpg';
import megawati from '../public/images/megawati.jpg';
import jokowi from '../public/images/jokowi.jpg';
import Image from 'next/image';
import News from 'components/News';
import { Box, Container, Divider, Flex, Text, Stack } from '@chakra-ui/react';
import HeadlineCarousel from 'components/HeadlineCarousel';
import RecommendNews from 'components/RecommendNews';
import { useState } from 'react';
import { data } from 'utils/helper';
import moment from 'moment/moment';
import 'moment/locale/id'; // without this line it didn't work
moment.locale('id');

const Home = () => {
  const [tab, setTab] = useState(0);
  const tabs = ['Lokal News', 'Lokal Brand', 'Lokal Preneur'];

  return (
    <Box paddingTop="80px" paddingBottom="30px" overflow="auto">
      <Box paddingX="30px">
        <Box
          width={['30px', '60px', '50px', '60px', '80px', '200px']}
          height={['2px', '2px', '2px', '2px', '5px', '5px']}
          backgroundColor="white"
          borderRadius="full"
        />
        <Text
          fontSize={['xl', '2xl', '3xl', '4xl', '5xl', '9xl']}
          fontWeight="semibold"
          color="white"
          fontFamily="sans-serif"
        >
          Headline
        </Text>
        <HeadlineCarousel />
        <Box
          width={['30px', '60px', '50px', '60px', '80px', '200px']}
          marginTop={'20'}
          height={['2px', '2px', '2px', '2px', '5px', '5px']}
          backgroundColor="white"
          borderRadius="full"
        />
        <Text
          fontSize={['xl', '2xl', '3xl', '4xl', '5xl', '9xl']}
          fontWeight="semibold"
          color="white"
          fontFamily="sans-serif"
          marginBottom={'10'}
        >
          For you
        </Text>
        <RecommendNews />
      </Box>
      <Divider marginY={10} />
      <Box paddingX="30px">
        <Flex justifyContent="space-evenly" marginBottom={10}>
          {tabs.map((val, idx) => {
            return (
              <Box
                key={idx + 7}
                _hover={{ cursor: 'pointer' }}
                transform="initial"
              >
                <Text
                  fontSize={['16px', '16px', '16px', '16px', '2xl']}
                  fontWeight={{ lg: 'medium' }}
                  color={tab == idx ? 'white' : 'gray'}
                  transition="color 300ms ease-in-out"
                  onClick={() => setTab(idx)}
                >
                  {val}
                </Text>
                {idx == tab && <Divider borderWidth="thin" />}
              </Box>
            );
          })}
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          {data.map((val, idx) => {
            if (idx >= 3) {
              return;
            } else {
              return (
                <Box key={idx + 10}>
                  <Box
                    height={{ sm: '15vh', lg: '60vh' }}
                    width={{ lg: '60vw' }}
                  >
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      src={val.image}
                      alt="photo"
                    />
                  </Box>
                  <Text
                    fontWeight="medium"
                    color="white"
                    fontSize={['16px', '16px', '16px', '16px', '2xl']}
                  >
                    {val.subTitle}
                  </Text>
                  <Flex
                    color="gray"
                    alignContent="center"
                    alignItems="center"
                    marginY={3}
                  >
                    <Text
                      fontWeight="medium"
                      fontSize={['12px', '12px', '12px', '12px', 'md']}
                    >
                      {val.category}
                    </Text>
                    <Box
                      width="5px"
                      height="5px"
                      borderRadius="full"
                      bgColor="gray"
                      marginX={2}
                    />
                    <Text
                      fontWeight="medium"
                      fontSize={['12px', '12px', '12px', '12px', 'md']}
                    >
                      {moment(val.date).format('DD MMMM YYYY')}
                    </Text>
                  </Flex>
                  <Divider marginY={5} />
                </Box>
              );
            }
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
