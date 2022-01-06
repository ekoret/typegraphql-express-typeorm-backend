require('dotenv').config();
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';

const main = async () => {

    //TypeORM database connection to PostgreSQL
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

    //Create an express app
    const app = express();
    app.listen( 4000, () => {
        console.log('server started on localhost:4000');
    })
    //Testing app
    app.get('/', (req, res) => {
        res.send('hello world');
    });
    

}

main();