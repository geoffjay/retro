import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Avatar, AvatarBadge, AvatarGroup, Box, Stack } from "@chakra-ui/react";

import getUsers from "@/lib/graphql/get-users.gql";

type UserNode = {
  id: string;
  email: string;
  avatarUrl: string;
  displayName: string;
};

type UserEdge = {
  cursor?: string;
  node: UserNode;
};

export const RetroUsers = () => {
  const { loading, error, data } = useQuery(gql(getUsers), {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (loading) {
      return;
    }
    if (error) {
      console.error(error);
    }
    if (data) {
      console.log(data);
    }
  }, [loading, error, data]);

  return data ? (
    <Stack spacing={2} px={4} direction="row">
      <AvatarGroup size="sm" max={5} spacing={-2}>
        {data.users_connection.edges.map((edge: UserEdge) => (
          <Avatar
            key={edge.node.id}
            size="sm"
            name={edge.node.displayName}
            src={edge.node.avatarUrl}
          >
            <AvatarBadge borderColor="green.400" bg="green" boxSize="1em" />
          </Avatar>
        ))}
      </AvatarGroup>
    </Stack>
  ) : (
    <Box />
  );
};
