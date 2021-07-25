import { Knex } from 'knex'

import { MYSQL_HOST, MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_USER, MYSQL_PORT } from '../config/environment'

const config: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    port: MYSQL_PORT
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations'
  }
}

export default config
