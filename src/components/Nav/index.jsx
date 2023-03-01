import Image from 'next/image';
import lokalconnect from '../../public/images/Asset1.png';
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
  Avatar,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon, CloseIcon } from '@chakra-ui/icons';
import SidebarMenu from 'components/SidebarMenu';
import MenuDrawer from 'components/MenuDrawer';
import LoginDrawer from 'components/LoginDrawer';
const Nav = () => {
  const firstField = React.useRef();
  // const secondField = React.useRef();
  const [login, setLogin] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { isLogin, onLogin, offLogin } = useDisclosure();

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
          <IconButton variant="unstyled" marginRight={5}>
            <SearchIcon color="white" fontSize="2xl" />
          </IconButton>

          <IconButton variant="unstyled" onClick={onOpen}>
            <HamburgerIcon color="white" fontSize="3xl" />
          </IconButton>
          <MenuDrawer
            firstField={firstField}
            isOpen={isOpen}
            onClose={onClose}
            isLogin={() => setLogin(true)}
          />
          <LoginDrawer isOpen={login} onClose={() => setLogin(false)} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
