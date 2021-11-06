import React, { useEffect, useState } from "react";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
} from "@chakra-ui/react";

import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, _] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, loading]);

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="test@test.com"
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="*******"
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              width="full"
              mt={4}
              type="submit"
              onClick={() => signInWithEmailAndPassword(email, password)}
            >
              Sign In
            </Button>
            <Button
              colorScheme="blue"
              variant="solid"
              width="full"
              mt={4}
              type="submit"
              onClick={signInWithGoogle}
            >
              Login with Google
            </Button>
          </form>
          <Link as={ReactLink} to="/reset">
            Forgot password?
          </Link>
          <Link as={ReactLink} to="/register">
            Register
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
