import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Divider,
  Text,
  DrawerCloseButton,
  Center,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import SidebarMenu from 'components/SidebarMenu';

const LoginDrawer = ({ isOpen, firstField, onClose }) => {
  return (
    <Center>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerCloseButton />
        <DrawerContent borderTopRadius="20px">
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
      </Drawer>
    </Center>
  );
};

export default LoginDrawer;
