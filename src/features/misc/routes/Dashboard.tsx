import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { gql, useMutation } from "@apollo/client";
import { Box, Button, Flex, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";

import { auth } from "@/lib/auth";
import { useNotificationStore } from "@/stores/notifications";
import storage from "@/utils/storage";

import { ContentLayout } from "@/components/Layout";
// import { Form } from "@/components/Form";

import createRetroMutation from "@/lib/graphql/create-retro.gql";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [retroId, setRetroId] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const { addNotification } = useNotificationStore();

  const [createRetro] = useMutation(
    gql(createRetroMutation),
    {
      onCompleted({ retro }) {
        if (retro) {
          storage.setRetroId(retro.id);
          navigate(`/app/retros/${retro.id}`);
        }
      }
    }
  );

  useEffect(() => {
    if (loading) {
      return;
    }
    if (error) {
      addNotification({
        type: "error",
        title: error.message,
      });
    }
    if (!user) {
      navigate("/");
    }
  }, [user, loading, error]);

  const handleCreateRetro = () => {
    createRetro({
      variables: {
        ownerId: 1,
        retroLanes: {
          data: [
            { title: "What went well?" },
            { title: "What should we try next?" },
            { title: "What didn't go well?" },
          ]
        },
      }
    });
  };

  return (
    <ContentLayout title="Dashboard">
      <Flex id="dashboard" justifyContent="center" justifyItems="center">
        <Box m={100} p={16} boxShadow="lg">
          <Stack direction="column" spacing={6}>
            <Button onClick={() => handleCreateRetro()}>Create a new retro</Button>
            <Text>or join an existing one</Text>
            <form>
              <FormControl isRequired>
                <FormLabel>Retro ID</FormLabel>
                <Input type="text" onChange={(e) => setRetroId(e.target.value)} />
              </FormControl>
              <Button mt={6} onClick={() => navigate(`/app/retros/${retroId}`)}>
                Start
              </Button>
            </form>
          </Stack>
        </Box>
      </Flex>
    </ContentLayout>
  )
};
