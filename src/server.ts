require("dotenv").config();
import "reflect-metadata";
import { createConnection } from "typeorm";

//Utils
import { startApolloServer } from "./utils/ApolloUtils";
import { createExpressApp, listening } from "./utils/ExpressUtils";

const main = async () => {
  //Make the connection to the database
  try {
    //Create connection to database
    //createConnection will look for ormconfig in project root
    await createConnection();

    //Create an express app and adds middleware
    const app = createExpressApp();

    //Create GraphQL endpoint with Apollo and applies middleware
    await startApolloServer(app);

    //Server is listening
    listening(app);
  } catch (err) {
    console.log(err);
  }
};

main();
