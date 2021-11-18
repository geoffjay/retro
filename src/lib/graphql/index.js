import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";

const hasuraConfig = {
  apiEndpoint: process.env.HASURA_API_ENDPOINT,
  token: process.env.HASURA_API_TOKEN,
  wsEndpoint: process.env.HASURA_WS_ENDPOINT,
};

const httpLink = new HttpLink({
  uri: hasuraConfig.apiEndpoint,
});

const wsLink = new WebSocketLink({
  uri: hasuraConfig.wsEndpoint,
  options: {
    reconnect: true,
  },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
