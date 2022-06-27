import 'reflect-metadata';
import { sqliteDataSource } from '../../data-source';

export const dbConnect = async () => {
  await sqliteDataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!\nConnected to Database.');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
    });
};
