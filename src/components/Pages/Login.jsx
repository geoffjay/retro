import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
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
  Stack,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

import { auth, signInWithEmail, signInWithGoogle } from "@/lib/auth";

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
    <Flex width="full" align="center" justifyContent="center" minH="100vh">
      <Box p={8} maxWidth="500px" color="gray.500" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center" p={6}>
          <Heading>Retro Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="test@test.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="*******"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button width="full" mt={4} onClick={() => signInWithEmail(email, password)}>
              Sign In
            </Button>
            <Button
              colorScheme="blue"
              variant="solid"
              width="full"
              mt={4}
              onClick={signInWithGoogle}
              leftIcon={<FaGoogle />}
            >
              Login with Google
            </Button>
          </form>
          <Stack p={4} align="center">
            <Link as={RouterLink} to="/reset">
              Forgot password?
            </Link>
            <Link as={RouterLink} to="/register">
              Register
            </Link>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
