import { DataSource } from 'typeorm';
import { User } from './src/entities/User';

// const DEV_ENVIROMENT = process.env.ENVIROMENT === 'DEV' ? true : false;

export const sqliteDataSource = new DataSource({
  type: 'sqlite',
  database: 'testDB.db',
  // entities: ['dist/entities/**/*.js'], //soon to be deprecated in v4.0
  entities: [User],
  synchronize: true,
  logging: false,
});
