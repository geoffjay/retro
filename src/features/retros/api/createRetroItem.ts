import { gql, MutationHookOptions, useMutation } from "@apollo/client";

import { useNotificationStore } from "@/stores/notifications";

import { User } from "@/features/users/types";

import createRetroItem from "@/lib/graphql/create-retro-item.gql";

export type CreateRetroItemDTO = {
  data: {
    id: string;
    description: string;
    anonymous: boolean;
    private: boolean;
    author: User;
  };
};

type CreateRetroItemVariables = {
  authorId: number;
  laneId: number;
  retroId: number;
  description: string;
  isAnonymous?: boolean;
  isPrivate?: boolean;
};

type UseCreateRetroItemOptions = MutationHookOptions<CreateRetroItemDTO, CreateRetroItemVariables>;

export const useCreateRetroItem = (options: UseCreateRetroItemOptions = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation<CreateRetroItemDTO, CreateRetroItemVariables>(gql(createRetroItem), {
    onError: (error) => {
      addNotification({
        type: "error",
        title: error.message,
      });
    },
    onCompleted: () => {
      addNotification({
        type: "success",
        title: "Retro item created",
      });
    },
    ...options,
  });
};
