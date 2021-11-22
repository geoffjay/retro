import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import { Spinner } from "@/components/Elements";
import { Lane } from "@/components/Lane";
import { ContentLayout } from "@/components/Layout";

import { useRetro } from "../api/getRetro";

export const Retro = () => {
  const { retroId } = useParams();
  const [retro, setRetro] = useState<any>(null);
  const [lanes, setLanes] = useState<any>(null);
  const retroQuery = useRetro({ retroId });
  const { data, loading } = retroQuery;

  const laneColors = ["green.100", "yellow.100", "red.100"];

  useEffect(() => {
    if (loading) {
      return;
    }
    if (data) {
      console.log(data.retro);
      setRetro(data.retro);
      setLanes(data.retro.lanes);
    }
  }, [data, loading]);

  if (loading) {
    return (
      <Flex w="full" h="full" pt={100} justifyContent="center" justifyItems="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return retro && lanes && lanes.edges.length >= 3 ? (
    <ContentLayout title={retro.id}>
      <Stack
        id="retro-content"
        direction="row"
        width="full"
        height="full"
        alignItems="stretch"
        align="flex-start"
        flexGrow={1}
        p={4}
      >
        <Lane
          title={lanes.edges[0].node.title}
          items={lanes.edges[0].node.items.edges}
          bg={laneColors[0]}
        />
        <Lane
          title={lanes.edges[1].node.title}
          items={lanes.edges[1].node.items.edges}
          bg={laneColors[1]}
        />
        <Lane
          title={lanes.edges[2].node.title}
          items={lanes.edges[2].node.items.edges}
          bg={laneColors[2]}
        />
      </Stack>
    </ContentLayout>
  ) : (
    <Box id="retro-empty" />
  );
};
