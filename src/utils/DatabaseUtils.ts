import { createConnection } from "typeorm";
import "reflect-metadata";

export const dbConnect = async () => {
  await createConnection();
};
