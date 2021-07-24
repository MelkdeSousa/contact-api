import { Knex } from 'knex'

import { MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_USER } from '../config/environment'

const config: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations'
  }
}

export default config
