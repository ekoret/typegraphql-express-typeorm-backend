const DEV_ENVIROMENT = process.env.ENVIROMENT === "DEV" ? true : false;

module.exports = {
  type: DEV_ENVIROMENT ? "sqlite" : process.env.DATABASE_TYPE,
  host: DEV_ENVIROMENT ? "localhost" : process.env.DATABASE_HOST,
  port: DEV_ENVIROMENT ? "3306" : process.env.DATABASE_PORT,
  username: DEV_ENVIROMENT ? "test" : process.env.DATABASE_USERNAME,
  password: DEV_ENVIROMENT ? "test" : process.env.DABASEBASE_PASSWORD,
  database: DEV_ENVIROMENT ? "testDB" : process.env.DABASE_NAME,
  synchronize: DEV_ENVIROMENT, //if dev env is true, synchronize (dev)
  logging: DEV_ENVIROMENT, //if dev env is true, logging true (dev)
  entities: ["dist/entities/**/*.js"],
};
