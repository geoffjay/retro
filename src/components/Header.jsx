import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";

import { auth, logout } from "@/lib/auth";

import { RetroUsers } from "./RetroUsers";

const Header = (props) => {
  const navigate = useNavigate();
  const [user, loading, _] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  useEffect(() => {
    if (loading) {
      return;
    }
  }, [loading]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return user ? (
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
      <Spacer />
      <RetroUsers />
      <Box display="block">
        <Menu>
          <MenuButton>
            <Avatar size="md" name={user.displayName} src={user.photoURL} onClick={handleToggle} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => navigate("/app/profile")}>Your profile</MenuItem>
            <MenuItem onClick={() => navigate("/app/retros")}>Your retros</MenuItem>
            <MenuDivider />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  ) : (
    <></>
  );
};

export default Header;
