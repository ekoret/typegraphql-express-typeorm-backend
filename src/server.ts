require("dotenv").config();
import "reflect-metadata";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import express from "express";

//Configs
import { typeORMconfig } from "./configs/typeORMconfig";
const SERVER_PORT = process.env.SERVER_PORT || 4000;

//Resolvers
import { HelloResolver } from "./resolvers/hello";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  //Make the connection to the database
  try {
    await createConnection(typeORMconfig);
  } catch (err) {
    if (err) console.log(err);
  }

  //Create an express app
  const app = express();
  app.use(express.json());
  app.use(cors());

  //Create GraphQL endpoint with Apollo
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, HelloResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start(); //This needs to be called before applyMiddleware
  apolloServer.applyMiddleware({ app }); //Applying the Apollo Server middleware to the app

  app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });
};

main();
