import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Container, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { data } from 'utils/helper';

const RecommendNews = () => {
  return (
    <Box>
      {data.map((val, idx) => {
        if (idx >= 3) {
          return;
        } else {
          return (
            <>
              <Flex marginBottom={3}>
                <Box height={{ sm: '15vh', lg: '40vh' }} width={['40vw']}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    src={val.image}
                    alt="photo"
                  />
                </Box>
                <Box marginLeft={5} height={['15vh']} width={['40vw']}>
                  <Text
                    fontSize={['sm', 'md', 'lg', 'xl', 'xl', '5xl']}
                    fontWeight="semibold"
                    color="white"
                    fontFamily="sans-serif"
                  >
                    {val.subTitle}
                  </Text>
                  <Text
                    fontSize={['3xs', '3xs', '2xs', 'sm', 'sm', '2xl']}
                    fontWeight="semibold"
                    color="white"
                    fontFamily="sans-serif"
                  >
                    {val?.title}
                  </Text>
                </Box>
              </Flex>
              {idx !== 2 ? (
                <Divider marginBottom={10} />
              ) : (
                <Flex align="center" justify="center" marginTop={10}>
                  <Text
                    fontSize={['sm', 'md', 'lg', 'xl', 'xl', '5xl']}
                    fontWeight="thin"
                    color="white"
                    fontFamily="sans-serif"
                    marginRight={2}
                    _hover={{ cursor: 'pointer' }}
                  >
                    Show more
                  </Text>

                  <ChevronDownIcon
                    fontWeight="thin"
                    color="white"
                    fontSize="2xl"
                    _hover={{ cursor: 'pointer' }}
                  />
                </Flex>
              )}
            </>
          );
        }
      })}
    </Box>
  );
};

export default RecommendNews;
