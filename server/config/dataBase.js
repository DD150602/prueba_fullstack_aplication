import mysql2 from 'mysql2/promise'
import { DATABASE_NAME, DATABASE_PORT, HOST, PASSWORD, USER } from './envVariables.js'

const CONNECTION_STRING = {
  host: HOST,
  user: USER,
  port: DATABASE_PORT,
  password: PASSWORD,
  database: DATABASE_NAME
}

let db

try {
  db = await mysql2.createConnection(CONNECTION_STRING)
  console.log('conectado con exito')
} catch (error) {
  console.log('no se pudo conectar')
}

export default db
