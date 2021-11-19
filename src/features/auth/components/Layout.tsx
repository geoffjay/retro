import * as React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Flex width="full" align="center" justifyContent="center" minH="100vh">
      <Box p={8} maxWidth="500px" color="gray.500" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center" p={6}>
          <Heading>{title}</Heading>
        </Box>
        <Box my={4} textAlign="left">
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
