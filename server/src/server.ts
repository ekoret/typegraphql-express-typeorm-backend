require('dotenv').config();
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

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

    //Create GraphQL endpoint with Apollo
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false
        })
    });
    await apolloServer.start(); //This needs to be calle dbefore applyMiddleware
    apolloServer.applyMiddleware({ app });


    app.listen( 4000, () => {
        console.log('server started on localhost:4000');
    })
    //Testing app
    app.get('/', (req, res) => {
        res.send('hello world');
    });




}

main();