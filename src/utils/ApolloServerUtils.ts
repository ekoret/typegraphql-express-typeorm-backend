import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
const path = require("path");

export const createApolloServer = async () => {
  const resolverPath = path.join(
    __dirname,
    "..",
    "resolvers",
    "**",
    "*.{ts,js}"
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [resolverPath],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  return apolloServer;
};
