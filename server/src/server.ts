import 'reflect-metadata';
import { createConnection } from 'typeorm';

const main = async () => {

    const connection = await createConnection({
        type: 'postgres',
        database: 'gainztrackr',
        username: 'postgres',
        password: '123123',
        logging: true,
        synchronize: true,
        entities: []
    });

}

main();