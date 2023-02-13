import Image from 'next/image';
import lokalconnect from '../../assets/images/Asset1.png';
import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  MenuButton,
  Menu,
  MenuGroup,
  MenuItem,
  useDisclosure,
  MenuList,
  MenuDivider,
  Drawer,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  DrawerFooter,
  Textarea,
  Text,
  Divider,
} from '@chakra-ui/react';
import { AddIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const firstField = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];
  return (
    <Box
      position="fixed"
      top="0"
      zIndex="10"
      width="100%"
      px={4}
      backgroundColor="black"
    >
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Image src={lokalconnect} alt="header" />
        <Box>
          <IconButton variant="unstyled">
            <SearchIcon color="white" fontSize="2xl" />
          </IconButton>

          {/* <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            <MenuItem>LKL News</MenuItem>
            <MenuItem>LKL Updates</MenuItem>
            <MenuItem>LKL Viral</MenuItem>
            <MenuDivider />
            <MenuItem>LKL Brand</MenuItem>
            <MenuItem>LKL Review</MenuItem>
            <MenuItem>LKL Recommendation</MenuItem>
            <MenuItem>LKL Rising Star</MenuItem>
            <MenuItem>LKL Preneur</MenuItem>
          </MenuList> */}

          <IconButton variant="unstyled" onClick={onOpen}>
            <HamburgerIcon color="white" fontSize="3xl" />
          </IconButton>
          <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                <Image src={lokalconnect} alt="header" />
              </DrawerHeader>

              <DrawerBody>
                <Text
                  fontWeight="extrabold"
                  fontFamily="sans-serif"
                  fontSize="large"
                  textTransform="uppercase"
                >
                  LKL News
                </Text>
                <Text
                  paddingLeft="5"
                  fontWeight="semibold"
                  fontSize="large"
                  textTransform="uppercase"
                >
                  LKL Updates
                </Text>
                <Text
                  paddingLeft="5"
                  fontWeight="semibold"
                  fontSize="large"
                  textTransform="uppercase"
                >
                  LKL Viral
                </Text>
                <Divider marginY="10" />
                <Text
                  fontWeight="extrabold"
                  fontFamily="sans-serif"
                  fontSize="large"
                  textTransform="uppercase"
                >
                  LKL Brand
                </Text>
                <Text
                  paddingLeft="5"
                  fontWeight="semibold"
                  fontSize="large"
                  textTransform="uppercase"
                >
                  LKL Review
                </Text>
                <Text
                  paddingLeft="5"
                  fontWeight="semibold"
                  fontSize="large"
                  textTransform="uppercase"
                >
                  LKL Recommendation
                </Text>
                <Text
                  paddingLeft="5"
                  fontWeight="semibold"
                  fontSize="large"
                  textTransform="uppercase"
                >
                  LKL Rising Star
                </Text>
                <Divider marginY="10" />
                <Text
                  fontWeight="extrabold"
                  fontFamily="sans-serif"
                  fontSize="large"
                  textTransform="uppercase"
                >
                  LKL Preneur
                </Text>
              </DrawerBody>

              {/* <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Submit</Button>
              </DrawerFooter> */}
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
