import { Grid, Stack } from "@chakra-ui/react";

import { Header } from "@/components";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Grid minH="100vh">
      <Stack direction="column">
        <Header id="header" />
        {children}
      </Stack>
    </Grid>
  );
};
