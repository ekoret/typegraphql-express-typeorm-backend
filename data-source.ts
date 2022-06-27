import { DataSource } from 'typeorm';

export const sqliteDataSource = new DataSource({
  type: 'sqlite',
  database: 'testDB.db',
  entities: ['dist/entities/**/*.js'], //soon to be deprecated in v4.0 see: https://typeorm.io/changelog#deprecations
  synchronize: true,
  logging: false,
});
