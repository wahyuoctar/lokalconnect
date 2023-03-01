import React from 'react';
import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Divider,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import SidebarMenu from 'components/SidebarMenu';
import LoginDrawer from 'components/LoginDrawer';

const MenuDrawer = ({ isOpen, firstField, onClose, isLogin }) => {
  //   const secondField = React.useRef();
  //   const { isLogin, onLogin, offLogin } = useDisclosure();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      initialFocusRef={firstField}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent backgroundColor="#151716">
        <Flex justifyContent="end">
          <IconButton onClick={onClose} variant="unstyled">
            <SearchIcon color="white" fontSize="md" />
          </IconButton>
          <IconButton onClick={onClose} variant="unstyled">
            <CloseIcon color="white" fontSize="sm" />
          </IconButton>
        </Flex>
        <DrawerBody marginTop={10}>
          <Text
            fontWeight="extrabold"
            fontFamily="sans-serif"
            fontSize="large"
            textTransform="uppercase"
            _hover={{ cursor: 'pointer' }}
            onClick={() => {
              isLogin();
              onClose();
            }}
          >
            login or signup
          </Text>
          <Divider marginY="10" />
          <SidebarMenu
            title="Lkl news"
            subMenus={[
              { title: 'lkl updates', href: '#' },
              { title: 'lkl viral', href: '#' },
            ]}
          />
          <Divider marginY="10" />
          <SidebarMenu
            title="Lkl Brand"
            subMenus={[
              { title: 'LKL Review', href: '#' },
              { title: 'LKL Recommendation', href: '#' },
              { title: 'LKL Rising Star', href: '#' },
            ]}
          />
          <Divider marginY="10" />
          <SidebarMenu title="Lkl Preneur" href="#" />
        </DrawerBody>
      </DrawerContent>
      {/* <LoginDrawer
        firstField={secondField}
        isOpen={isLogin}
        onClose={offLogin}
      /> */}
    </Drawer>
  );
};

export default MenuDrawer;
