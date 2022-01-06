require('dotenv').config();
import 'reflect-metadata';
import { createConnection } from 'typeorm';

const main = async () => {

    const connection = await createConnection({
        type: 'postgres',
        host: 'localhost',
        database: 'gainztrackr',
        username: 'postgres',
        password: process.env.DATABASE_PASSWORD,
        // port: 5432,
        // logging: true,
        // synchronize: true,
        entities: []
    });

}

main();