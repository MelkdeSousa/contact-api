import * as dotenv from 'dotenv'

dotenv.config({ path: '../../.env' })

export const MYSQL_DATABASE = process.env.MYSQL_DATABASE

export const MYSQL_USER = process.env.MYSQL_USER

export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD

export const MYSQL_PORT = Number(process.env.MYSQL_DOCKER_PORT)

export const MYSQL_HOST = process.env.MYSQL_HOST

export const PORT = Number(process.env.PORT)
