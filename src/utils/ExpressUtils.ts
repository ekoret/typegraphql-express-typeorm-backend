import express, { Express } from "express";
import cors from "cors";

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
