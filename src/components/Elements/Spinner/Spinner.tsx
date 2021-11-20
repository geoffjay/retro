import { Spinner as ChakraSpinner } from "@chakra-ui/react";

const sizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

const variants = {
  light: "blue.200",
  primary: "blue.500",
};

export type SpinnerProps = {
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
};

export const Spinner = ({ size = "md", variant = "primary" }: SpinnerProps) => {
  return <ChakraSpinner size={size} color={variants[variant]} speed="1.0s" thickness="4px" />;
};
