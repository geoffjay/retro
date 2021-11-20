import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Flex,
  Slide,
} from "@chakra-ui/react";

// these are just here for type in props
const icons = {
  info: <AlertIcon aria-hidden="true" />,
  success: <AlertIcon aria-hidden="true" />,
  warning: <AlertIcon aria-hidden="true" />,
  error: <AlertIcon aria-hidden="true" />,
};

export type NotificationProps = {
  notification: {
    id: string;
    type: keyof typeof icons;
    title: string;
    message?: string;
  };
  onDismiss: (id: string) => void;
};

export const Notification = ({
  notification: { id, type, title, message },
  onDismiss,
}: NotificationProps) => {
  return (
    <Flex id={id} w="full" direction="column" justifyItems="center" py={4}>
      <Slide in={true} direction="bottom" style={{ zIndex: 10 }}>
        <Box w="full">
          <Alert status={type}>
            <AlertIcon />
            <AlertTitle mr={2}>{title}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
            <CloseButton
              onClick={onDismiss as unknown as React.MouseEventHandler<HTMLButtonElement>}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
        </Box>
      </Slide>
    </Flex>
  );
};
