import { ApolloServer, ExpressContext } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { Express } from "express";
const path = require("path");

const createApolloServer = async () => {
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

const applyApolloServerMiddleware = (
  apolloServer: ApolloServer<ExpressContext>,
  app: Express
) => {
  apolloServer.applyMiddleware({ app });

  return apolloServer;
};

export const startApolloServer = async (app: Express) => {
  const apolloServer = await createApolloServer();

  try {
    await apolloServer.start();

    applyApolloServerMiddleware(apolloServer, app);

    return apolloServer;
  } catch (err) {
    console.log("Error starting Apollo Server");
  }

  return;
};
