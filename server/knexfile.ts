// Update with your config settings.
import path from 'path';
module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }, seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  }, useNullAsDefault: true
};


// module.exports = {

//   development: {
//     client: "sqlite3",
//     connection: {
//       filename: "./dev.sqlite3"
//     }
//   },

//   staging: {
//     client: "postgresql",
//     connection: {
//       database: "my_db",
//       user: "username",
//       password: "password"
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: "knex_migrations"
//     }
//   },

//   production: {
//     client: "postgresql",
//     connection: {
//       database: "my_db",
//       user: "username",
//       password: "password"
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: "knex_migrations"
//     }
//   }

// };


// module.exports = {
//   client: 'postgresql',
//   connection: {
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE_DEV,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS
//   },
//   migrations: {
//     directory: path.resolve(__dirname, 'src', 'database', 'migrations')
//   }
// };