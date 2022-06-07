import express, { Express } from "express";
import cors from "cors";

export const createExpressApp = () => {
  const app = express();

  const appLoaded = applyExpressMiddleware(app);

  return appLoaded;
};

const applyExpressMiddleware = (app: Express) => {
  app.use(express.json());
  app.use(cors());

  return app;
};
