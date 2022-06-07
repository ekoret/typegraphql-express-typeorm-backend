import { ConnectionOptions } from "typeorm";
import { User } from "../entities/User";

export const typeORMconfig: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  database: "gainztrackr",
  username: "postgres",
  password: process.env.DATABASE_PASSWORD,
  // port: 5432,
  // logging: true,
  synchronize: true,
  entities: [User],
};
