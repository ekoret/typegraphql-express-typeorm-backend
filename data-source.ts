import { DataSource } from "typeorm";
// import { User } from "./src/entities/User";

const DEV_ENVIROMENT = process.env.ENVIROMENT === "DEV" ? true : false;

const sqliteDataSource = new DataSource({
  type: "sqlite",
  database: "testDB.sql",
  entities: ["dist/entities/**/*.js"],
});

const postgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  entities: ["dist/entities/**/*.js"],
});

sqliteDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
