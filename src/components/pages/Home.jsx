import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaPlusCircle } from "react-icons/fa";
import {
  Box,
  Checkbox,
  Flex,
  Grid,
  Heading,
  IconButton,
  Spacer,
  Stack,
  Textarea,
} from "@chakra-ui/react";

import { auth } from "../../firebase";

import { Header } from "@components";

const Lane = ({ title, ...props }) => {
  const [item, setItem] = useState("");

  const handleItemChange = e => {
    const itemValue = e.target.value;
    setItem(itemValue);
  };

  return (
    <Box
      height="full"
      width="full"
      boxShadow="lg"
      align="left"
      p={4}
      {...props}
    >
      <Flex direction="column" height="full">
        <Heading size="sm" color="gray.600" pb={4}>
          {title}
        </Heading>
        <Stack flex="1" spacing={2}>
          <Box height="4em" bg="white" boxShadow="md" />
          <Box height="4em" bg="white" boxShadow="md" />
          <Box height="4em" bg="white" boxShadow="md" />
          <Box height="4em" bg="white" boxShadow="md" />
        </Stack>
        <Box height="144px" bg="white" boxShadow="md" p={2}>
          <Stack direction="column" spacing={2}>
            <Textarea
              value={item}
              onChange={handleItemChange}
              placeholder="Enter item description"
              size="sm"
              bg="white"
              focusBorderColor="gray.300"
              resize="none"
            />
            <Box width="full" color="gray.500">
              <Flex width="full">
                <Checkbox size="md" iconColor="gray.500" iconSize="1rem" pr={4}>
                  Private
                </Checkbox>
                <Checkbox size="md" iconColor="gray.500" iconSize="1rem">
                  Anonymous
                </Checkbox>
                <Spacer />
                <IconButton
                  aria-label="Submit retro item"
                  icon={<FaPlusCircle />}
                  color="gray.500"
                  fontSize="20px"
                />
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Flex>
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
          <Lane title="What went well?" bg="green.100" />
          <Lane title="What should we try?" bg="yellow.100" />
          <Lane title="What didn't go well?" bg="red.100" />
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Home;
