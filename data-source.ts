import { DataSource } from 'typeorm';
import { User } from './src/entities/User';

export const sqliteDataSource = new DataSource({
  type: 'sqlite',
  database: 'testDB.db',
  entities: ['dist/entities/**/*.js'], //soon to be deprecated in v4.0 see: https://typeorm.io/changelog#deprecations
  synchronize: true,
  logging: false,
});

export const postgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'test',
  // entities: ['dist/entities/**/*.js'],
  entities: [User],
  synchronize: true,
  logging: false,
});
