# GraphQL API

## Schema

To download the GraphQL schema from Hasura `graphqurl` needs to be available,
run `npm install -g graphqurl` to install it.

```shell
gq $(HASURA_API_ENDPOINT) \
  -H "X-Hasura-Admin-Secret: $(HASURA_API_TOKEN)" \
  --introspect > schema.graphql
```

A script has also been added to simplify this, use `yarn gql:schema` to output
`schema.graphql` or `yarn gql:schema:json` for `schema.json`.
