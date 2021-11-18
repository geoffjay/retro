import * as React from "react";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Button, ChakraProvider, Flex, Heading, Spinner, theme } from "@chakra-ui/react";

import client from "@/lib/graphql";
import store from "@/state/store";

import { Notifications } from "@/components/notifications";

const ErrorFallback = () => {
  return (
    <Flex width="full" height="full" justifyContent="center" justifyItems="center">
      <Heading as="h2" size="lg">
        Ooops, something went wrong :({" "}
      </Heading>
      <Button onClick={() => window.location.assign(window.location.origin)}>Refresh</Button>
    </Flex>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <Flex width="full" height="full" justifyContent="center" justifyItems="center">
          <Spinner size="xl" />
        </Flex>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Provider store={store}>
            <ChakraProvider theme={theme}>
              <ApolloProvider client={client}>
                <Notifications />
                <BrowserRouter>{children}</BrowserRouter>
              </ApolloProvider>
            </ChakraProvider>
          </Provider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
