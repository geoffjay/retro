import React, { useEffect } from "react";
import { Link as ReactLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";

import { auth, logout } from "../../firebase";

const Home = () => {
  const [user, loading, _] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return;
    }
  }, [loading]);

  return (
    <Flex width="full" align="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Home</Heading>
        </Box>
        {user
          ? <Button variant="ghost" onClick={logout}>Logout</Button>
          : <Link as={ReactLink} to="/login">Login</Link>
        }
      </Box>
    </Flex>
  );
};

export default Home;
