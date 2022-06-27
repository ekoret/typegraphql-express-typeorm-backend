# typegraphql-express-typeorm v3.0

Building a backend with TypeGraphQL, ExpressJS, TypeORM, and GraphQL.

In this version of the project, the goal is to make the package database-agnostic.

## NPM Scripts

`start`  
Starts the server without compiling TypeScript files. Only really useful for launching in production.

`watch`  
Compiles and watches TypeScript files for changes. If changes occur, the TypeScript files will re-compile.

`dev`  
Starts the server with nodemon for reloading and development. Use this along side the `watch` script to develop.

## Environment Variables (Need to update)

ENVIROMENT  
SERVER_PORT  
DATABASE_TYPE  
DATABASE_HOST  
DATABASE_NAME  
DATABASE_USERNAME  
DATABASE_PASSWORD  
DATABASE_PORT

## Tech Information

Node 18.2.0  
npm 8.9.0

## Dev Log

2022-06-27  
The project was tested with a PostgreSQL database and the server works fine. At this point in the project, I can say that the project itself is database-agnostic. The user will still be required to set up the database options. Here are the DataSource options that are available: https://typeorm.io/data-source-options

2022-06-27  
As of right now, the project is currently set up to be a `sqlite` database. I have `updated TypeORM to version 0.3.6` and the project now makes use of a `DataSource` instead of an ormconfig. After updating TypeORM and changing ormconfig to a DataSource, the database continues to work fine with the Express and Apollo GraphQL server. In the future when attempting to add the next database driver, will need to continue to test this.
