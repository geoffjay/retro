import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

import { auth, logout } from "../firebase";

const Header = props => {
  const [user, loading, _] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  useEffect(() => {
    if (loading) {
      return;
    }
  }, [loading]);

  return (
    user && (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="white"
        color="gray.500"
        boxShadow="md"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Heading as="h2" size="lg">
            Retro
          </Heading>
        </Flex>

        <Box display="block">
          <Menu>
            <MenuButton>
              <Avatar
                size="md"
                name={user.displayName}
                src={user.photoURL}
                onClick={handleToggle}
              />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    )
  );
};

export default Header;
