import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

import { Spinner } from "@/components/Elements";
import { ContentLayout } from "@/components/Layout";

import { useRetro } from "../api/getRetro";

export const Retro = () => {
  const { retroId } = useParams();
  const [retro, setRetro] = useState(null);
  const retroQuery = useRetro({ retroId });
  const { data, loading } = retroQuery;

  useEffect(() => {
    if (loading) {
      return;
    }
    if (data) {
      setRetro(data.retro);
    }
  }, [data, loading]);

  if (loading) {
    return (
      <Flex w="full" h="full" justifyContent="center" justifyItems="center">
        <Spinner size="lg" />
      </Flex>
    );
  }

  return (
    retro ? (
      <ContentLayout title={retro.id}>
        <Text>{retro.id}</Text>
      </ContentLayout>
    ) : (
      <Box />
    )
  );
};
