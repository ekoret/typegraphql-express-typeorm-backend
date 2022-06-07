require("dotenv").config();
import "reflect-metadata";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
// import { createConnection } from "typeorm";
import express from "express";

//Configs
// import { typeORMconfig } from "./configs/typeORMconfig";
const SERVER_PORT = process.env.SERVER_PORT || 4000;

//Resolvers
import { HelloResolver } from "./resolvers/hello";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  //TypeORM database connection to PostgreSQL
  //   const connection = await createConnection(typeORMconfig);

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
