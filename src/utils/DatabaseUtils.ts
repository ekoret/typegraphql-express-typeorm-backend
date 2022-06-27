import 'reflect-metadata';
import { sqliteDataSource, postgresDataSource } from '../../data-source';

export const dbConnect = async () => {
  await postgresDataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!\nConnected to Database.');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
    });
};
