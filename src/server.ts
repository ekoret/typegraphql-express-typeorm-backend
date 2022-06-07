require("dotenv").config();
import "reflect-metadata";
import cors from "cors";
import { createConnection } from "typeorm";
import express from "express";

//Utils
import { startApolloServer } from "./utils/ApolloUtils";

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
    await startApolloServer(app);

    app.listen(SERVER_PORT, () => {
      console.log(`Server listening on port ${SERVER_PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
