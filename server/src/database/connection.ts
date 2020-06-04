import knex from 'knex'
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    }, useNullAsDefault: true
});

export default connection;

// {
//     client: 'postgresql',
//     connection: {
//         host: process.env.DB_HOST,
//         database: process.env.DB_DATABASE_DEV,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASS
//     }