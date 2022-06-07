require("dotenv").config();
import "reflect-metadata";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import express from "express";

//Configs
const SERVER_PORT =
  process.env.ENVIROMENT === "DEV" ? 4000 : process.env.SERVER_PORT;

const main = async () => {
  //Make the connection to the database
  try {
    await createConnection(); //createConnection will look for the ormconfig.json file in the project root

    //Create an express app
    const app = express();
    app.use(express.json());
    app.use(cors());

    //Create GraphQL endpoint with Apollo
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [__dirname + "/resolvers/**/*.{ts,js}"],
        validate: false,
      }),
      context: ({ req, res }) => ({ req, res }),
    });

    await apolloServer.start(); //This needs to be called before applyMiddleware
    apolloServer.applyMiddleware({ app }); //Applying the Apollo Server middleware to the app

    app.listen(SERVER_PORT, () => {
      console.log(`Server listening on port ${SERVER_PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
