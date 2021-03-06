import { Flex } from "@chakra-ui/react";

import { useNotificationStore } from "@/stores/notifications";

import { Notification } from "./Notification";

export const Notifications = () => {
  const { notifications, dismissNotification } = useNotificationStore();

  return (
    <Flex
      id="notifications"
      direction="column"
      w="full"
      justifyItems="end"
      px={4}
      py={6}
      pointerEvents="none"
      position="absolute"
    >
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={dismissNotification}
        />
      ))}
    </Flex>
  );
};
