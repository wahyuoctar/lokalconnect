import { Flex, Text, IconButton, Box, Collapse } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const SidebarMenu = ({ title, subMenus = [], href }) => {
  const [expand, setExpand] = useState(false);
  return (
    <Box>
      {subMenus.length > 0 ? (
        <>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            onClick={() => setExpand(!expand)}
            _hover={{ cursor: 'pointer' }}
          >
            <Text
              fontWeight="extrabold"
              fontFamily="sans-serif"
              fontSize="large"
              textTransform="uppercase"
            >
              {title}
            </Text>
            <IconButton variant="unstyled" rounded="full">
              {expand ? <TriangleUpIcon /> : <TriangleDownIcon />}
            </IconButton>
          </Flex>
          <Collapse in={expand}>
            {subMenus.map((value, index) => {
              return (
                <Text
                  paddingLeft="5"
                  fontWeight="semibold"
                  fontSize="large"
                  textTransform="uppercase"
                >
                  <a href={value.href}>{value.title}</a>
                </Text>
              );
            })}
          </Collapse>
        </>
      ) : (
        <Text
          fontWeight="extrabold"
          fontFamily="sans-serif"
          fontSize="large"
          textTransform="uppercase"
        >
          <a href={href}>{title}</a>
        </Text>
      )}
    </Box>
  );
};

export default SidebarMenu;
