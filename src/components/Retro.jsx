import React from "react";
import { Stack } from "@chakra-ui/react";

import { Lane } from "@components";

const Retro = () => {
  return (
    <Stack
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
  );
};

export default Retro;
