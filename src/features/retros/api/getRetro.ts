import { gql, useQuery } from "@apollo/client";

import getRetroById from "@/lib/graphql/get-retro-by-id.gql";

import { Retro } from "../types";

type RetroData = {
  retro: Retro;
};

type RetroVariables = {
  id: string;
};

type UseRetroOptions = {
  retroId: string | undefined;
};

export const useRetro = ({ retroId }: UseRetroOptions) => {
  if (retroId === undefined) {
    return { data: null, loading: false, error: { message: "no retro ID was provided" } };
  }
  return useQuery<RetroData, RetroVariables>(gql(getRetroById), {
    fetchPolicy: "cache-and-network",
    variables: { id: retroId },
  });
};
