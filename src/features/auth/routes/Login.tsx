import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link, Stack } from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  const navigate = useNavigate();

  const onLoginSuccess = () => {
    navigate("/app");
  };

  return (
    <Layout title="Retro Login">
      <LoginForm onSuccess={() => onLoginSuccess()} />
      <Stack p={4} align="center">
        <Link as={RouterLink} to="/auth/reset">
          Forgot password?
        </Link>
        <Link as={RouterLink} to="/auth/register">
          Register
        </Link>
      </Stack>
    </Layout>
  );
};
