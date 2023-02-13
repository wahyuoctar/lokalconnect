import Image from 'next/image';
import lokalconnect from '../../assets/images/Asset1.png';
import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Divider,
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import SidebarMenu from 'components/Menu';
const Nav = () => {
  const firstField = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                <SidebarMenu
                  title="Lkl news"
                  subMenus={[
                    { title: 'lkl updates', href: '#' },
                    { title: 'lkl viral', href: '#' },
                  ]}
                />
                <Divider marginY="5" />
                <SidebarMenu
                  title="Lkl Brand"
                  subMenus={[
                    { title: 'LKL Review', href: '#' },
                    { title: 'LKL Recommendation', href: '#' },
                    { title: 'LKL Rising Star', href: '#' },
                  ]}
                />
                <Divider marginY="5" />
                <SidebarMenu title="Lkl Preneur" href="#" />
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
