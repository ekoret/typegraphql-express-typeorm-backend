require("dotenv").config();
import "reflect-metadata";
import { createConnection } from "typeorm";

//Utils
import { startApolloServer } from "./utils/ApolloUtils";
import { createExpressApp } from "./utils/ExpressUtils";

//Configs
const SERVER_PORT =
  process.env.ENVIROMENT === "DEV" ? 4000 : process.env.SERVER_PORT;

const main = async () => {
  //Make the connection to the database
  try {
    await createConnection(); //createConnection will look for the ormconfig.json file in the project root

    //Create an express app
    const app = createExpressApp();

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
