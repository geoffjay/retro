import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Box, Divider, Grid, Heading, Stack } from "@chakra-ui/react";

import { auth } from "../../firebase";

import { Header } from "@components";

const Lane = ({ title, ...props }) => {
  return (
    <Box height="full" width="full" boxShadow="lg" align="left" p={4} {...props}>
      <Heading size="sm" color="gray.600" pb={4}>{title}</Heading>
      <Stack spacing={2}>
        <Box height="4em" bg="white" boxShadow="md" />
        <Box height="4em" bg="white" boxShadow="md" />
        <Box height="4em" bg="white" boxShadow="md" />
        <Box height="4em" bg="white" boxShadow="md" />
      </Stack>
    </Box>
  );
};

const Home = () => {
  const [user, loading, _] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/login");
    }
  }, [user, loading]);

  return (
    <Grid minH="100vh">
      <Stack direction="column">
        <Header id="header" />
        <Stack
          id="body"
          direction="row"
          width="full"
          height="full"
          alignItems="stretch"
          align="flex-start"
          flexGrow={1}
          p={4}
        >
          <Lane
            title="What went well?"
            bg="green.100"
          />
          <Lane
            title="What should we try?"
            bg="yellow.100"
          />
          <Lane
            title="What didn't go well?"
            bg="red.100"
          />
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Home;
