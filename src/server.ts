require("dotenv").config();
import "reflect-metadata";
import { createConnection } from "typeorm";

//Utils
import { startApolloServer } from "./utils/ApolloUtils";
import { createExpressApp, listening } from "./utils/ExpressUtils";

const main = async () => {
  //Make the connection to the database
  try {
    await createConnection(); //createConnection will look for the ormconfig.json file in the project root

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
