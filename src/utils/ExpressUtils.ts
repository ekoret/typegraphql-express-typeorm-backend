import express, { Express } from "express";
import cors from "cors";

//Configs
const SERVER_PORT =
  process.env.ENVIROMENT === "DEV" ? 4000 : process.env.SERVER_PORT;

/**
 *
 * @return An express app with loaded middlewares
 */
export const createExpressApp = () => {
  const app = express();

  const appLoaded = applyExpressMiddleware(app);

  return appLoaded;
};

/**
 *
 * @param app The express app to apply middleware
 * @return The express app
 */
const applyExpressMiddleware = (app: Express) => {
  app.use(express.json());
  app.use(cors());

  return app;
};

/**
 *
 * @param app The express app
 */
export const listening = (app: Express) => {
  app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });
};
